/* Particle System
 * 
 * The actual particle system
 *
 */

import {
    BufferGeometry,
    Float32BufferAttribute,
    Vector2,
    Vector3,
    ShaderMaterial,
    DoubleSide,
    AdditiveBlending,
    Points
} from "../../libs/three.module.js";

import { psVertex, psFragment } from '../Shaders/particleSystemShaders.js';

import { lerp } from "./utils/math.js";

const ParticleSystem = function (t_, w_, h_) {

    // Store the vertices and "references" for the UV map
    this.vertices = [];
    this.references = [];
    this.alpha = 0; // Store the alpha value for the "fade in" effect

    this.init = function () {

        for (let i = 0; i < t_; i++) {

            let uvx = i / t_;

            for (let j = 0; j < t_; j++) {

                let uvy = j / t_;

                // Initialize the vertices in random 2D position
                this.vertices.push(Math.random() * w_);
                this.vertices.push(Math.random() * h_);
                this.vertices.push(0);

                this.references.push(uvx);
                this.references.push(uvy);
            }

        }

        this.geometry = new BufferGeometry();
        this.geometry.addAttribute('position', new Float32BufferAttribute(this.vertices, 3));
        this.geometry.addAttribute('reference', new Float32BufferAttribute(this.references, 2));

        this.uniforms = {
            "texturePosition": { value: null },
            "textureVelocity": { value: null },
            "screenResolution": { value: new Vector2(w_, h_) },
            "col": { value: new Vector3(0.19, 0.62, 0.88) },
            "alpha": { value: this.alpha },
        }

        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: psVertex,
            fragmentShader: psFragment,
            side: DoubleSide,
            blending: AdditiveBlending,
            transparent: true,
            vertexColors: true,

        });

        this.particlesystem = new Points(this.geometry, this.material);
        this.particlesystem.position.x = -w_ / 2;
        this.particlesystem.position.y = -h_ / 2;

    }

    this.update = function (positionVariable, velocityVariable) {

        this.alpha = lerp(this.alpha, 0.19, 0.002);

        this.uniforms["alpha"].value = this.alpha;
        this.uniforms["texturePosition"].value = positionVariable;
        this.uniforms["textureVelocity"].value = velocityVariable;

    }

}

export { ParticleSystem };