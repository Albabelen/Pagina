body {
    margin: 0;
    overflow: hidden;
}

#background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#question {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 36px;
    color: white;
}

#no {
    font-size: 18px;
    color: white;
    cursor: pointer;
}

.star-rain {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: white;
    animation: starRainAnimation 1s ease-out infinite;
}

@keyframes starRainAnimation {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
