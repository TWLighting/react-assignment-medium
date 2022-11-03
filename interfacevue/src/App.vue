<template>
  <div id="app">
    <div>
      <b-card header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Org Management</h6>
        </template>
        <b-card-body>
          <template>
            <b-row cols="1">
              <b-col sm="2" md="2">
                <b-form-group
                  label="org:"
                  label-for="org-title"
                  label-cols-sm="2"
                  label-align-sm="right"
                >
                  <b-form-input id="org-title" sm="2" md="2"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <ul>
                  <li class="d-flex align-items-center">
                    <ul class="row-title d-flex align-items-center">
                      <li class="li-title">users name:</li>
                      <li class="li-title">age:</li>
                      <li class="li-title">activated</li>
                      <li class="li-title">representation</li>
                    </ul>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </template>
        </b-card-body>
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
export default {
  defaultset() {
    for (let i = 0; i < this.members.length; i++) {
      console.log(i);
    }
  },
  mounted() {
    //非同步載入json資料
    let self = this;
    this.$http.get("orgs.json", {}).then(function (response) {
      for (let row in response.data) {
        self.list.push(response.data[row]);
      }
    });
  } /*自動載入函式*/,
  created() {
    console.log(this.list);
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>
<style>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.row-title {
  width: 90%;
  padding-bottom: 50px;
}
.li-title {
  padding: 0 200px;
}
</style>


