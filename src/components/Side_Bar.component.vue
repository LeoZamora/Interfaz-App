<template>
  <div class="sidebar-container">
    <div
      class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top"
    >
      <router-link
        to="/"
        class="d-block p-2 link-dark text-decoration-none"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <i class="bi-bootstrap fs-3"></i>
      </router-link>
      <ul
        class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center"
      >
        <li class="nav-item">
          <a
            href="#"
            class="nav-link py-2 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <i class="bi-house fs-3"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="nav-link py-2 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <i class="bi-speedometer2 fs-3"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="nav-link py-2 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Orders"
          >
            <i class="bi-table fs-3"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="nav-link py-2 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <i class="bi-heart fs-3"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="nav-link py-2 px-1"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <i class="bi-people fs-3"></i>
          </a>
        </li>
      </ul>
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center justify-content-center p-2 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi-person-circle fs-3"></i>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Side_BarComponent",
};
</script>

<style scoped>
.sidebar-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
