<template>
  <div class="navPage">
    <header class="globalHeader">
      <label class="headerLabel">
        <input type="text">
      </label>
      <button class="headerButton">search</button>
    </header>
    <main class="globalMain">
      <ul class="siteList">
        <li>
          <div class="site">
            <div class="logo">A</div>
            <div class="link">acfun.cn</div>
          </div>
        </li>
        <li>
          <div class="site">
            <div class="logo">B</div>
            <div class="link">bilibli</div>
          </div>
        </li>
        <li class="addButton">
          <div class="site">
            <div class="logo">+</div>
            <div class="link">新增</div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">

export default {};
</script>

<style lang="scss" scoped>
.navPage {

  .globalHeader {
    display: flex;
    margin: 20px;
    justify-content: space-between;

    .headerLabel {
      font-size: 14px;
      width: 100%;
      margin-right: 10px;

      input {
        font-size: inherit;
        width: 100%;
        height: 40px;
        padding: 0 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    .headerButton {
      border: none;
      white-space: nowrap;
      padding: 0 20px;
      border-radius: 4px;
      background: #165bc4;
      color: white;
      font-size: 16px;

      &:focus {
        outline: none
      }
    }
  }

  .globalMain {
    .siteList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px;

      .site {
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        width: 160px;
        height: 160px;
        justify-content: center;
        align-items: center;
        background: white;
        margin-bottom: 10px;
        padding: 20px 0;
        border-radius:4px;

        .logo {
          width: 64px;
          height: 64px;
          font-size: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .link{
          font-size:14px;
          padding-top:4px;
        }
      }
    }
  }
}
</style>