import axios from 'axios';

const instance = axios.create({
    baseURL:'https://glacial-shelf-70625.herokuapp.com/api/'
})

export default{
    getData: () => 
    axios({
        'method': 'GET',
        'url' : 'https://glacial-shelf-70625.herokuapp.com/api/customers',
    },
    transformResponse: [function (data) {
        console.log("Transforming Data...")

        const json = JSON.parse(data)
    }
    ]
        
}

// 'headers': {
//     'first_name',
//     'last_name',
//     'email',
//     'phone'