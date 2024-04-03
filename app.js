const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const swaggerUi = require('swagger-ui-koa');
const serve = require('koa-static');
const userController = require('./controller/userController.js');
const swaggerDocument = require('./swagger_output.json');

const app = new Koa();
const router = new Router();

// Body parser middleware
app.use(bodyParser());

// Serve Swagger UI assets statically
app.use(serve('./node_modules/swagger-ui-dist'));

// Serve Swagger UI
router.get('/api-docs', swaggerUi.serve
    // #swagger.ignore = true
);
router.get('/api-docs', swaggerUi.setup(swaggerDocument)
    // #swagger.ignore = true
);

// Routes
router.post('/users',
    // #swagger.tags = ['Users']
    userController.createUser
);

router.get('/users',
    // #swagger.tags = ['Users']
    userController.getUsers
);

router.get('/users/:id',
    // #swagger.tags = ['Users']
    userController.getUserById
);

router.put('/users/:id',
    // #swagger.tags = ['Users']
    userController.updateUser
);

router.delete('/users/:id',
    // #swagger.tags = ['Users']
    userController.deleteUser
);

// Error handling middleware
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.status = error.status || 500;
        ctx.body = { error: error.message };
    }
});

// Use router middleware
app.use(router.routes()).use(router.allowedMethods());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
