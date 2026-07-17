"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const neighbourhood_route_1 = __importDefault(require("../modules/neighbourhood/neighbourhood.route"));
const development_route_1 = __importDefault(require("../modules/development/development.route"));
const waterfront_route_1 = __importDefault(require("../modules/waterfront/waterfront.route"));
const article_route_1 = __importDefault(require("../modules/article/article.route"));
const contact_route_1 = __importDefault(require("../modules/contact/contact.route"));
const analytics_route_1 = __importDefault(require("../modules/analytics/analytics.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.default,
    },
    {
        path: '/neighbourhoods',
        route: neighbourhood_route_1.default,
    },
    {
        path: '/developments',
        route: development_route_1.default,
    },
    {
        path: '/waterfronts',
        route: waterfront_route_1.default,
    },
    {
        path: '/articles',
        route: article_route_1.default,
    },
    {
        path: '/contacts',
        route: contact_route_1.default,
    },
    {
        path: '/analytics',
        route: analytics_route_1.default,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
