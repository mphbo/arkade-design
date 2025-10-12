import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface Particle {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  maxspeed: number;
  h: number;
}

export const Flowfield: React.FC = () => {
  const inc = 0.1;
  const scl = 10;
  let cols: number, rows: number;
  let zoff = 0;
  let particles: Particle[] = [];
  let flowfield: p5Types.Vector[] = [];

  const setup = (p: p5Types, canvasParentRef: Element) => {
    const cnv = p
      .createCanvas(p.windowWidth, p.windowHeight)
      .parent(canvasParentRef);
    cnv.style("position", "fixed");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("z-index", "-1"); // behind other content
    cnv.style("pointer-events", "none"); // allows clicks to pass through
    p.colorMode(p.HSB, 255);

    cols = Math.floor(p.width / scl);
    rows = Math.floor(p.height / scl);
    flowfield = new Array(cols * rows);

    for (let i = 0; i < 1000; i++) {
      particles.push({
        pos: p.createVector(p.random(p.width), p.random(p.height)),
        vel: p.createVector(0, 0),
        acc: p.createVector(0, 0),
        maxspeed: 2,
        h: p.random(255),
      });
    }

    p.background(0);
  };

  const draw = (p: p5Types) => {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        const index = x + y * cols;
        const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
        const v = p.createVector(p.cos(angle), p.sin(angle));
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
      }
      yoff += inc;
    }
    zoff += 0.003;

    particles.forEach((particle) => {
      // follow
      const x = Math.floor(particle.pos.x / scl);
      const y = Math.floor(particle.pos.y / scl);
      const index = x + y * cols;
      const force = flowfield[index];
      particle.acc.add(force);

      // update
      particle.vel.add(particle.acc);
      particle.vel.limit(particle.maxspeed);
      particle.pos.add(particle.vel);
      particle.acc.mult(0);

      // edges
      if (particle.pos.x > p.width) particle.pos.x = 0;
      if (particle.pos.x < 0) particle.pos.x = p.width;
      if (particle.pos.y > p.height) particle.pos.y = 0;
      if (particle.pos.y < 0) particle.pos.y = p.height;

      // show
      p.stroke(particle.h, 255, 255, 20);
      particle.h += 0.1;
      if (particle.h > 255) particle.h = 0;
      p.point(particle.pos.x, particle.pos.y);
    });
  };

  const windowResized = (p: p5Types) => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
