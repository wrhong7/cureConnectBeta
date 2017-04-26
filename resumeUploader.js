			<input id="inputFile" type="file" onchange="convertToBase64();" />

			<script type="text/javascript">

				var resumePDFBinary; 

			    function convertToBase64() {
			        //Read File
			        var selectedFile = document.getElementById("inputFile").files;
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
			                console.log("this is base 64 PDF script")
			                console.log(base64);
			                $("#regFirstStepContainer").append(
			                	`
			                	<iframe src="${base64}"" height="1000px" width="100%"></iframe>
			                	`
			                )
			            };
			            // Convert data to base64
			            fileReader.readAsDataURL(fileToLoad);
			        }
			    }

			</script>


	<button id="regPageClinicianButton" onclick="regClinicianButtonClicked()">Clinicians</button>
	<button id="regPageClinicButton">Hospital and</br>Cinic Recruiters</button>

	<div class="mainpageContianer">

		<div id="regFirstStepContainer">

			First

			<select class="js-example-basic-multiple" id="providerType" multiple="multiple">
			</select>
			<select class="js-example-basic-multiple" id="providerSpecialty" multiple="multiple">
			</select>
			<select class="js-example-basic-multiple" id="providerDegree" multiple="multiple">
			</select>
			<select class="js-example-basic-multiple" id="providerRegion" multiple="multiple">
			</select>

		</div>

	</div>

