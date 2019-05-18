//Import Three.js

// Libary for functions returning 2d shapes
//All shapes are centered
var Shape2D = {

    GetSquare: function()
    {
        var squarePoints = 
        [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 1),
            new THREE.Vector2(1, 1),
            new THREE.Vector2(1, 0)
        ]

        return squarePoints;
    },

    GetIsometricTriangle: function()
    {
        var trianglePoints = 
        [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.25, 1),
            new THREE.Vector2(0.5, 0)
        ]

        return trianglePoints;
    },

    GetEvenCross: function() 
    {
        var evenCrossPoints = 
        [
            new THREE.Vector2(1,0),
            new THREE.Vector2(2,-1),
            new THREE.Vector2(3,0),
            new THREE.Vector2(4,-1),
            new THREE.Vector2(3,-2),
            new THREE.Vector2(4,-3),
            new THREE.Vector2(3,-4),
            new THREE.Vector2(2,-3),
            new THREE.Vector2(1,-4),
            new THREE.Vector2(0,-3),
            new THREE.Vector2(1,-2),
            new THREE.Vector2(0,-1)
        ]

        return evenCrossPoints;
    },

    GetCross: function() 
    {
        var crossPoints = 
        [
            new THREE.Vector2(5,0),
            new THREE.Vector2(19,14),
            new THREE.Vector2(33,0),
            new THREE.Vector2(38,5),
            new THREE.Vector2(24,19),
            new THREE.Vector2(38,33),
            new THREE.Vector2(33,38),
            new THREE.Vector2(19,24),
            new THREE.Vector2(5,38),
            new THREE.Vector2(0,33),
            new THREE.Vector2(14,19),
            new THREE.Vector2(0,5)
        ]

        return crossPoints;
    },

    //Start of Scale functions
    GetScaledSquare: function(s)
    {
        var squarePoints = 
        [
            new THREE.Vector2(1-s, 1-s),
            new THREE.Vector2(1-s, s),
            new THREE.Vector2(s, s),
            new THREE.Vector2(s, 1-s)
        ]

        return squarePoints;
    },

    GetScaledIsometricTriangle: function(thickness)
    {
        var trianglePoints = 
        [
            new THREE.Vector2(thickness, thickness),
            new THREE.Vector2(0.25, 1-(thickness*2)),
            new THREE.Vector2(0.5-thickness, thickness)
        ]

        return trianglePoints;
    }
}