var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            // create 2 vec2 objects
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                (object1.halfheight + object2.halfheight)) {
                if (!object2.isColliding) {
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                }
            }
            else {
                // maybe this could be moved to Reset?
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
