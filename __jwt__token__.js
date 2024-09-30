

/**
 * 1. install jsonwebtoken
 * 2. jwt.sing (payload, secret, {expiresIn:})
 * 3. token client
 */

/**
 * how to store token in the client side
 * 1. memory ==> ok type
 * 2. local storage-->ok type (xss) 
 * 3. cookies: http only  
 */

/**
 * 1. set cookies with http only. for devlopment secure: false,
 * 2. cors
 * //-----Middleware------
app.use(cors({
  origin: ['http://localhost:5173/'],
  credentials: true
}));

 * 3. client side axios seatting
 *    in axion set withCredentials: true

 */


/**
 * 1. to send cookies form the client make sure you added 
 * withCredentials true for the call using  axios..?
 * 2. use cookie parser as middleware
 * 
 */