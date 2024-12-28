
        function registerCustomer() {
            // Perform client-side validation
            var customerName = document.getElementById("customerName").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var address = document.getElementById("address").value;
            var contactNumber = document.getElementById("contactNumber").value;

            if (!/^[A-Za-z]+$/.test(customerName)) {
                alert("Customer name must be alphabet only.");
                return;
            }

            if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert("Email ID not valid.");
                return;
            }

            if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{5,}$/.test(password)) {
                alert("Password is not matching the criteria.");
                return;
            }

            if (!address.trim()) {
                alert("Address field must not be null or blank.");
                return;
            }

            if (!/^[0-9]+$/.test(contactNumber)) {
                alert("Contact number must not contain any alphabet.");
                return;
            }

            // For demonstration purposes, generating a random customer ID
            var customerId = Math.floor(Math.random() * 1000000);

            // Display acknowledgment screen
            document.getElementById("acknowledgment").style.display = "block";
            document.getElementById("customerId").innerText = customerId;
            document.getElementById("ackCustomerName").innerText = customerName;
            document.getElementById("ackEmail").innerText = email;
        }
