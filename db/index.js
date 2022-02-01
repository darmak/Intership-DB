export let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'qwe', status: 'good'},
    {id: '3', name: 'CWE', status: 'bad'},
    {id: '4', name: 'gta', status: 'lazy'}
];

export let users = [
    {id: '1', firstName: 'Dmitry', lastName: 'Buravkin', salary: "3000"},
    {id: '2', firstName: 'Denis', lastName: 'Maslouski', salary: "200"},
    {id: '3', firstName: 'Oleg', lastName: 'Mikus', salary: "1000"},
    {id: '4', firstName: 'Liza', lastName: 'Ivanovna', salary: "2200"},
];

export const removeS = (id) => {
    servers = servers.filter(s => s.id !== id);
};

export const removeU = (id) => {
    users = users.filter(s => s.id !== id);
};