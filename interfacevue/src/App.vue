<template>
  <div id="app">
    <div>
      <b-card header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Org Management</h6>
        </template>
        <b-card-body> dadjkjk </b-card-body>
        <template #footer>
          <b-row align-h="end">
            <b-button
              variant="danger"
              :style="{ width: '200px', margin: '5px' }"
              >Cancel</b-button
            >
            <b-button variant="info" :style="{ width: '200px', margin: '5px' }"
              >Save</b-button
            >
          </b-row>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "./assets/sass/app.scss";
</style>
