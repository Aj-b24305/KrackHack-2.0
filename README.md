# Mal-Chek-Kar

Mal-Chek-Kar is a static malware analysis tool developed by Team KrackJack. It allows users to upload files and analyze them using YARA rules to determine whether they are malicious or clean. By leveraging file signatures and patterns, this tool provides a quick and efficient way to detect threats without executing the file.

## Tech Stack
- **Frontend:** HTML, CSS, JS
- **Backend:** Flask (Python)
- **Static Analysis:** YARA

## How It Works
### Step-by-Step Process
1. **File Upload & Type Detection**
   - Users upload a file through the web interface.
   - The backend identifies the file type using its headers.

2. **Static Analysis Using YARA**
   - The file is scanned against a predefined set of YARA rules.
   - If malicious patterns are detected, the file is flagged accordingly.

3. **Result Display**
   - If no or a few matches are found, the file is marked as **Clean**.
   - If YARA rules match, the file is marked as **Malicious**, and a 'View Matches' button appears.
   - Clicking 'View Matches' displays the specific YARA rules that triggered the detection.

## YARA Rule Sources
We use predefined YARA rule sets for scanning files. Our YARA rules are sourced from the following repository:
[https://github.com/Yara-Rules](https://github.com/Yara-Rules)

## Limitations
🚨 **Static analysis has certain limitations:**
- It cannot detect highly obfuscated or polymorphic malware.
- Packed or encrypted files may evade detection.
- Zero-day malware may not be flagged by existing YARA rules.
- No dynamic behavior analysis is performed.

For a more comprehensive approach, static analysis can be combined with dynamic malware analysis techniques in a sandbox environment.

## Future Enhancements
- **Integration with additional rule sets** to improve detection accuracy.
- **Support for more file formats** beyond executables.
- **Enhanced reporting and logging** for better analysis.
- **Improved FrontEnd** for better UI.

## Contributing
We welcome contributions! Feel free to submit pull requests or raise issues to improve the project.

## License
This project is open-source and available under the MIT License.

---
Developed by **Team KrackJack**

