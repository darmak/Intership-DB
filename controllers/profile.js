export const profile = function(req, res, next) {
    if (req.user) {
        res.send(req.user);
        next();
      } 
      else {
       return res.status(401).json({ message: 'Invalid token' });
      }
};