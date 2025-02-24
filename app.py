from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
import json
from werkzeug.utils import secure_filename  # For secure file uploads
from malware_scanner import scan_file  # Import your scanning function

app = Flask(__name__)

# Configuration
UPLOAD_FOLDER = 'uploads'  # Directory to store uploaded files
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'exe', 'dll', 'pptx', 'ppt', 'doc', 'docx'}  # Updated allowed file types
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limit file size (16MB)

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Check if the post request has the file part
        if 'file' not in request.files:
            return render_template('index.html', error='No file part in the request.')
        file = request.files['file']
        # If the user does not select a file
        if file.filename == '':
            return render_template('index.html', error='No file selected.')
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)  # Sanitize filename
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # Scan the file and get the results
            scan_results = scan_file(filepath)

            # Delete the file after scanning (optional, but recommended for security)
            os.remove(filepath)

            # Pass results to the template for display
            return render_template('index.html', results=scan_results)
        else:
            error_msg = 'Invalid file type. Allowed types: ' + ', '.join(ALLOWED_EXTENSIONS)
            return render_template('index.html', error=error_msg)

    return render_template('index.html')  # Initial GET request

@app.route('/uploads/<filename>')
def download_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

if __name__ == '__main__':
    app.run(debug=True)  # Debug mode is useful during development

