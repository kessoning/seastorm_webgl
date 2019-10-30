const psVertex = `
  precision highp float;

  attribute vec2 reference;

  uniform sampler2D texturePosition;
  uniform sampler2D textureVelocity;

  uniform vec2 screenResolution;

  void main() {

    vec4 _tp = texture2D(texturePosition, reference);
    float x = mod(_tp.x, screenResolution.x);
    float y = mod(_tp.y, screenResolution.y);

    vec4 _fp = vec4(x, y, 0.0, 1.0);

    gl_PointSize = 1.0;
    
    gl_Position = projectionMatrix * modelViewMatrix * _fp;
  }
`;

const psFragment = `
  precision mediump float;

  uniform vec3 col;
  uniform float alpha;

  void main() {
      gl_FragColor = vec4(col.xyz, alpha);
  }
`;

export {
  psVertex,
  psFragment
};