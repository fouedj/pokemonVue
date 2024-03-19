<template>
  <div class="product-big-title-area">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="product-bit-title text-center">
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.product-big-title-area {
  padding: 20px 0;
  background-color: #f8f8f8;
}

/* Styles pour le conteneur */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Styles pour la zone de titre du produit */
.product-bit-title {
  margin-bottom: 30px;
}

/* Styles pour le titre du produit */
.product-bit-title h2 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}
</style>
