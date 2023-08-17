export default /* glsl */
`
    uniform float uTime;
    uniform vec2 uMouse;
    uniform bool uHover;
    uniform float uMouseDown;

    varying vec2 vUv;
    varying vec3 vViewPosition;

    #define PI 3.14159265358979323

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        vec2 mouse = vUv - uMouse;

        mouse *= -2.0;

        float elevation = tan(modelPosition.x * pow(PI, 10.0)) * tan(modelPosition.y * pow(PI, 10.0) ) * sin(uTime) * 0.001;
        
        // if ( modelPosition.x + 0.5 > mouse.x - 0.75 && modelPosition.x < mouse.x - 0.75
        //     && modelPosition.y + 0.5 > mouse.y - 0.75 && modelPosition.y < mouse.y - 0.75) {
            modelPosition.z *= sin(elevation);
        // }
            // modelPosition.z -= elevation;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;

        // Varyings
        vUv = uv;
        vViewPosition = - modelPosition.xyz; 
    }
`;
