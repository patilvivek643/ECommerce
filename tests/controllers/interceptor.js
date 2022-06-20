module.exports={
    mockRequest:()=>{
        const req={};
        req.body=jest.fn{}.mockReturnValue(req);
        req.params=jest.fn{}.mockReturnValue(res);
        return req;
    }
    mockReponse:()=>{
        const res={};
        res.send=

    }
}