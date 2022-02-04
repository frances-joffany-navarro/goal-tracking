<template>
  <div>
    <form name="create-user-account" method="POST" data-netlify="true">
      <p>
        <label>First Name: <input type="text" name="firstname" /></label>
      </p>
      <p>
        <label>Last Name: <input type="text" name="lastname" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Password: <input type="password" name="password" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
