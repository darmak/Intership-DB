import { servers, users, removeS, removeU} from '../db/index.js';

export const getAllServers = (req, res) => {
    res.status(200).json(servers);
}

export const getAllUsers = (req, res) => {
    res.status(200).json(users);
}

export const createServer = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        status: req.body.status,
        name: req.body.name
    }
    servers.push(newServer);
    res.status(201).json(newServer);
}

export const createUser = (req, res) => {
    const newUser = {
        id: Date.now().toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        salary: req.body.salary
    }
    users.push(newUser);
    res.status(201).json(newUser);
}

export const removeServer = (req, res) => {
    removeS(req.params.id);
    res.json({message:'Has been removed server ' + req.params.id});
}

export const removeUser = (req, res) => {
    removeU(req.params.id);
    res.json({message:'Has been removed user ' + req.params.id});
}

export const getOneServer = (req, res) => {
    res.status(201).json(servers.find((s) => s.id === req.params.id));
}

export const getOneUser = (req, res) => {
    res.status(201).json(users.find((s) => s.id === req.params.id));
}

export const updateServer = (req, res) => {
    let serverIndex;
    const server = servers.find((s, index) => {
        if(s.id === req.params.id) {
            serverIndex = index;
            return true;
        }
    });
    const newServer = {
        ...server,
        name: req.body.name,
    }
    servers.splice(serverIndex, 1, newServer);
    res.status(201).json(newServer);
}

export const updateUser = (req, res) => {
    let userIndex;
    const user = users.find((s, index) => {
        if(s.id === req.params.id) {
            userIndex = index;
            return true;
        }
    });
    const newUser = {
        ...user,
        salary: req.body.salary || "",
    }
    users.splice(userIndex, 1, newUser);
    res.status(201).json(newUser);
}
