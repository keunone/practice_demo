import React, { Component } from 'react'
import { render } from 'react-dom'

render(
  <div></div>,
  document.getElementById('app')
)

// 动态刷新词汇表
/* eslint-disable no-undef */
// chrome.runtime.onMessage.addListener(async (request, sender, sendRes) => {
//   const { name: type } = request
//   if (type === 'vocabularyChange') {
//     return true
//   }
// })
