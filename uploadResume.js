var resumePDFBinary; 

function convertToBase64() {
    //Read File
    var selectedFile = document.getElementById("file").files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            // Print data in console

            resumePDFBinary = base64
            $(".leftColumn").replaceWith(
                `
                <div class="leftColumn">
                    <div class="nurseRegStep1AttachResumeButton">
                        <input class="inputFile" name="file" type="file" id="file" onchange="convertToBase64();" />
                        <label for="file" class="attachFile">replace attached resume</label>
                    </div>
                </div>
                `
            );

            $(".leftColumn").append(
            	`
            	<iframe src="${base64}"  "width=400px" height="430px"></iframe>
            	`
            )
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}