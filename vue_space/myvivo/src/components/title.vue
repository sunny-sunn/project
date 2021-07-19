<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style>
h2{
  position: absolute;
  top: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.35rem;
  font-weight: normal;
}
h2::before{
  display: block;
  position: absolute;
  top: 0.23rem;
  left: -0.42rem;
  width: 0.28rem;
  height: 0.04rem;
  background-color: #bfbfbf;
  content: "";
}
h2::after{
  display: block;
  position: absolute;
  top: 0.23rem;
  right: -0.42rem;
  width: 0.28rem;
  height: 0.04rem;
  background-color: #bfbfbf;
  content: "";
}
</style>