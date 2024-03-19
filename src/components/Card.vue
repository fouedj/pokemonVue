<template>
    <div class="card">
        <div class="single-shop-product">
            <div class="product-upper">
                <img :src="imageUrl" alt="product-image" />
            </div>
            <h2>
                <a href="">{{ title }}</a>
            </h2>

            <div class="product-option-shop">
                <button class="add_to_cart_button" @click="onButtonClick">
                    {{ buttonText }}
                </button>
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
        },
        imageUrl: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        onButtonClick: {
            type: Function,
            required: true
        }
    }
};
</script>

<style scoped>
.single-shop-product h2 {
    font-size: 20px;
    margin: 10px 0;
}

.product-option-shop {
    margin-top: 15px;
}

.single-shop-product {
    margin-bottom: 50px
}

.col2-set {
    margin-left: 0;
}

.col-1,
.col-2 {
    float: none;
    margin-left: 0;
    width: inherit;
}

.product-upper {
    width: 250px;
}

/* Ajoutez d'autres styles CSS selon vos besoins */
</style>