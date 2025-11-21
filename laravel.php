
const response = await fetch(
        "http://didar.intelsofts.com/Laravel_React/B_POS/public/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log("Full API Response:", data);

      if (!response.ok) {
        this.setState({ error: data.error || "Login failed", loading: false });
        return;
      }
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        console.log("Token saved:", data.access_token);
       // alert("Token exists: " + data.access_token); 
      } else {
       // alert("No token found in localStorage"); 
      } api call korse, sekhan theke token paisi seta  local localStorage.setItem("token", data.access_token); save koira niche