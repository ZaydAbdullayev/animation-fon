import React, { useState, useEffect } from "react";
import "./bg.css";
import * as THREE from "three";

export const BG = () => {
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 200) + 55;
    const g = Math.floor(Math.random() * 200) + 55;
    const b = Math.floor(Math.random() * 200) + 55;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };
  return (
    <div className="bg_box">
      <div
        className="bg_item bg1"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg2"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg3"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg4"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg5"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg6"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg7"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg8"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg9"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg10"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg11"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg12"
        style={{ background: generateRandomColor() }}
      ></div>
      <div
        className="bg_item bg13"
        style={{ background: generateRandomColor() }}
      ></div>
      <i className="window"></i>
    </div>
  );
};

export const RainBg = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.6,
      2000
    );
    camera.position.z = 3;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create raindrops
    const raindrops = [];
    const raindropGeometry = new THREE.BoxGeometry(0.005, 0.1, 0.005);
    const raindropMaterial = new THREE.MeshBasicMaterial({
      background: "#55cfff",
      blendSrcAlpha: "#333",
    });

    for (let i = 0; i < 1000; i++) {
      const raindrop = new THREE.Mesh(raindropGeometry, raindropMaterial);
      raindrop.position.x = Math.random() * 10 - 5;
      raindrop.position.y = Math.random() * 10 - 5;
      raindrop.position.z = Math.random() * 10 - 5;
      raindrops.push(raindrop);
      scene.add(raindrop);
    }

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      raindrops.forEach((raindrop) => {
        raindrop.position.y -= 0.1;
        if (raindrop.position.y < -5) {
          raindrop.position.y = 5;
        }
      });

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div className="bg_rain_box"></div>;
};
