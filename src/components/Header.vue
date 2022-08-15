<template>
    <header>
        <div class="header-nav">
            <router-link to="/" class="title">Home
            </router-link>
            <router-link to="/about" class="title">About
            </router-link>
            <router-link to="/projects" class="title">Projects
            </router-link>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
}
</script>


<style scoped>
    * {
        /* Font properties */
        font-family: 'Poppins';
        font-style: normal;

        color: var(--header-text);
    }
    header {
        position: fixed;
        width: 100%;
        height: var(--header-height);
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--header-bg);
        z-index: 1;
        border-bottom: 5px solid var(--header-border);
    }
    
    .header-nav {
        /* Font properties */
        font-weight: 300;
        font-size: 25px;
        display: flex;
    }

    .title {
        grid-column-start: 3;
        grid-column-end: 4;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 39px;
        padding: 20px;
    }

</style>