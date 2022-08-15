<template>
    <div class="page-title">
        <h1 style="margin:0px;">Knowledge</h1>
    </div>
    <div class="knowledge-container">
        <p class="table-title">Programming Language</p>
        <table class="table">
            <thead>
                <tr>
                    <th> Language</th>
                    <th> Used Percentage</th>
                    <th> Rating</th>
                </tr>
            </thead>
            <tbody v-for="(item) in prog_languages" v-bind:key="item.id">
                <tr>
                    <td>{{item.title}}</td>
                    <td>{{item.usage}}</td>
                    <td>
                        <p class="star_icon">
                            <div v-if="item.rating === 4.5">
                                <span v-for="(n) in 4" v-bind:key="n.id">
                                    <font-awesome-icon icon="fa-solid fa-star"/>
                                </span>
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-star-half-stroke"/>
                                </span>
                            </div>
                            <div v-else>
                                <span  
                                    v-for="(n) in item.rating" v-bind:key="n.id">
                                    <font-awesome-icon icon="fa-solid fa-star"/>
                                </span>
                                <span  
                                    v-for="(n) in (5-item.rating)" v-bind:key="n.id">
                                    <font-awesome-icon icon="fa-regular fa-star"/>
                                </span>
                            </div>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default{ 
    name: 'TechStack',
    data() {
        return {
            prog_languages: [
                {
                    title: 'Javascript',
                    usage: '29.73%',
                    rating: 4.5
                },
                {
                    title: 'HTML',
                    usage: '28%',
                    rating: 4.5
                },
                {
                    title: 'CSS',
                    usage: '10%',
                    rating: 4
                },
                {
                    title: 'PHP',
                    usage: '12%',
                    rating: 4
                },
                {
                    title: 'Python',
                    usage: '26%',
                    rating: 4
                },
                {
                    title: 'Python',
                    usage: 'Sometimes',
                    rating: 4
                }
            ]
        }
    }
}
</script>

<style scoped>

    .text-span {
        color: var(--main-text);
    }
    .knowledge-container {
        justify-content: center;
        width:100%;
        padding:5px;
    }
    .star_icon {
        color: #FAC213;
    }
    .table {
        width:100%;
        border-collapse: collapse;
        text-align: center;
        table-layout: fixed;
    }
    .table th, td{
        overflow: hidden;
    }
    .table th{
        color: #E7F6F2;
        font-weight: 500;
        padding: 10px;
    }
    .table tbody, td{
        color: #E7F6F2;
        font-weight: 100;
    }
    .table tbody, td, p{
        padding: 0px;
        margin: 0px;
        gap: 0px;
    }
    .table-title {
        color: #2C3333; 
        text-align:center; 
        font-weight: 500;
        font-size: 20px;
        background-color: #E7F6F2;
    }


</style>