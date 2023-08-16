export default /* glsl */
`
    uniform vec2 uMouse;

    varying vec2 vUv;
    varying vec3 vViewPosition;

    void main() {
        vec2 mouse = vUv - uMouse;
        mouse = step(0.0, fract(mouse));

        vec3 normal = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));

        vec3  normMouse = vec3(mouse, 1.0) * 2.0;
        normMouse += normal;
        normMouse -= 1.0;

        gl_FragColor = vec4(normMouse.x, normMouse.y, normMouse.z, 1.0);
        gl_FragColor = vec4(normMouse.x * 0., normMouse.y * 0., normMouse.z * 0., 1.0);
    }
`;
