export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-select-one-assignment">
                            <option value="HOMEWORK">HOMEWORK</option>
                            <option value="ESSAY">ESSAY</option>
                            <option selected value="ASSIGNMENT">ASSIGNMENT</option>
                            <option value="EXAM">EXAM</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-select-one-grade-format">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter Grade</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-select-one-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="ONPAPER">On Paper</option>
                            <option value="EXTOOL">External Tool</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check-entry-options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry-options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry-options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry-options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry-options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr><br />
                <tr>
                    <td align="center" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <input type="text" id="wd-assign-to" placeholder="Everyone" />
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <input type="date"
                        value="2024-01-21"
                        id="wd-due-date" /><br />
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-01-21"
                            id="wd-available-from" />
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input type="date"
                            value="2024-02-29"
                            id="wd-available-until" />
                    </td><br />
                </tr>
            </table>
        </div>
    );
}
