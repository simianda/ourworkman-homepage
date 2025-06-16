<template>
   <nav class="navbar">
      <div class="logo">
         <router-link to="/"> OurWorkman</router-link>
      </div>

     <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
     </div>

     <!-- Desktop nav links -->
     <ul class="nav-links">
        <li>
         <router-link to="/about"> About </router-link>
        </li>
        <li>
         <router-link to="/services"> Services</router-link>
        </li>
        <li>
         <router-link to="/become-handy"> Become a Handyman</router-link>
        </li>
     </ul>

     <!-- Desktop auth buttons -->
     <div class="auth-buttons">
         <router-link to="/login" class="login">Login</router-link>
         <router-link to="/register" class="signup">Sign up</router-link>
     </div>

     <!-- Mobile menu (contains both nav links and auth buttons) -->
     <ul class="mobile-menu" :class="{ 'active': isMenuOpen }">
        <li>
         <router-link to="/about"> About </router-link>
        </li>
        <li>
         <router-link to="/services"> Services</router-link>
        </li>
        <li>
         <router-link to="/become-handy"> Become a Handyman</router-link>
        </li>
        <li class="mobile-auth">
         <router-link to="/login" class="login">Login</router-link>
        </li>
        <li class="mobile-auth">
         <router-link to="/register" class="signup">Sign up</router-link>
        </li>
     </ul>
   </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  width: 100%;
  height: 100px;
  background: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.5rem;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.auth-buttons .login {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.auth-buttons .signup {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}

/* Hamburger menu styles */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 25px;
  background-color: #333;
  margin: 4px 0;
}

/* Mobile menu styles */
.mobile-menu {
  display: none;
  list-style: none;
}

/* Responsive styles */
@media (max-width: 768px) {
  .navbar {
    padding: 0 2rem;
  }
  
  .nav-links,
  .auth-buttons {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-top: 1px solid #eee;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .mobile-menu.active {
     display: flex;
  opacity: 1;
  transform: translateY(0);
  }
  
  .mobile-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
      display: none;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-10px);
  }
  
  .mobile-auth .signup {
    background-color: blue;
    color: white;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    display: inline-block;
    width: auto;
    margin-top: 0.5rem;
  }
}

</style>