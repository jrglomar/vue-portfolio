<template>
    <div class="page-title">
        <h1 style="padding-bottom:55px;">My Skills</h1>
    </div>
    <div class="knowledge-container">
        <div class="table-box-prog">
            <div class="border">
                <p class="table-title" style="background-color: #FFDA77; width:100%;">Programming Languages</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody v-for="(item) in prog_languages" v-bind:key="item.id">
                    <tr>
                        <td class="td-title">{{item.title}}</td>
                        <td class="td-rating">
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
        <div class="table-box-framework">
            <div class="border">
                <p class="table-title" style="background-color: #AEE6E6">Frameworks Used</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody v-for="(item) in framework" v-bind:key="item.id">
                    <tr>
                        <td class="td-title">{{item.title}}</td>
                        <td class="td-rating">
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
        
    </div>
    <div class="knowledge-container">
        <div class="table-box-skills">
            <div class="border">
                <p class="table-title" style="background-color: #FFA45B">Others</p>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody v-for="(item) in others" v-bind:key="item.id">
                    <tr>
                        <td class="td-title">{{item.title}}</td>
                        <td class="td-rating">
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
    </div>
    
    
</template>

<script>
export default{ 
    name: 'TechStack',
    data() {
        return {
            prog_languages: 
            [
                {
                    title: 'Javascript',
                    rating: 4.5
                },
                {
                    title: 'HTML',
                    rating: 4.5
                },
                {
                    title: 'CSS',
                    rating: 4
                },
                {
                    title: 'PHP',
                    rating: 4
                },
                {
                    title: 'Python',
                    rating: 4
                },
                {
                    title: 'SQL',
                    rating: 4
                },
                {
                    title: 'C++',
                    rating: 3
                },
                {
                    title: 'Java',
                    rating: 3
                },
                {
                    title: 'VBA',
                    rating: 3
                },
            ],
            framework: 
            [
                {
                    title: 'Laravel',
                    rating: 4.5
                },
                {
                    title: 'jQuery',
                    rating: 4.5
                },
                {
                    title: 'CodeIgniter',
                    rating: 4.5
                },
                {
                    title: 'VueJS',
                    rating: 4
                },
                {
                    title: 'FastAPI',
                    rating: 4
                },
                {
                    title: 'Sequelize',
                    rating: 3
                },
                {
                    title: 'ExpressJS',
                    rating: 3
                },
                {
                    title: 'Bootstrap',
                    rating: 4.5
                },
            ],
            others: 
            [
                {
                    title: 'Version Control - Git',
                    rating: 5
                },
                {
                    title: 'MVC Pattern',
                    rating: 4.5
                },
                {
                    title: 'API Documentation - Postman',
                    rating: 4
                },
                {
                    title: 'Code Documentation',
                    rating: 4
                },
                {
                    title: 'Database Management - MySQL, MSSQL',
                    rating: 4
                },
                {
                    title: 'Project Management - Trello',
                    rating: 4
                },
                {
                    title: 'ORM Technique',
                    rating: 4
                },
                {
                    title: 'Database Migration Scripting',
                    rating: 4
                },
                {
                    title: 'Agile Approach',
                    rating: 3
                },
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
        display: flex;
        flex-direction: row;
        align-items:flex-start;
        width:100%;
        padding:5px;
        padding-bottom: 10px;
    }
    .star_icon {
        color: #FAC213;
    }
    .table {
        width:100%;
        border-collapse: collapse;
        table-layout: fixed;
        vertical-align: top;
    }
    .table th, td{
        overflow: hidden;
    }
    .table th {
        color: #E7F6F2;
        font-weight: 500;
        font-size: 20px;
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
    .table-box-prog {
        width:50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .table-box-framework {
        width:50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .table-box-skills {
        width:100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .border {
        display: flex;
        justify-content: center;
        width:100%;
        height:30px;
    }
    .table-title {
        color: #2C3333; 
        width: 100%;
        display: flex;
        flex-shrink: initial;
        justify-content: center;
        text-align:center;
        font-weight: 500;
        font-size: 20px;
    }
    .td-title{
        text-align: left;
        padding-left: 20px;

    }
    .td-rating{
        text-align: right;
        padding-right: 20px;
    }



</style>