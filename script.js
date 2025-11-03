/* Reset default browser styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff8f0;
  color: #333;
}

/* Navbar */
header {
  background-color: #ff914d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  position: sticky;
  top: 0;
}

header .logo {
  font-size: 1.8rem;
}

header nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 500;
}

header nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
              url('https://source.unsplash.com/1600x700/?food,restaurant') center/cover;
  color: white;
}

.hero h2 {
  font-size: 2.5rem;
}

.hero p {
  margin: 15px 0;
  font-size: 1.2rem;
}

button {
  padding: 12px 25px;
  background-color: #ff914d;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #e67428;
}

/* Menu Section */
.menu {
  text-align: center;
  padding: 60px 20px;
}

.menu h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.menu-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 300px;
  padding: 15px;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.card h3 {
  margin-top: 10px;
  color: #ff914d;
}

/* Footer */
footer {
  background-color: #ff914d;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 50px;
}
document.getElementById("orderBtn").addEventListener("click", function() {
  alert("Thank you for your interest! 😊 Online orders coming soon.");
});
