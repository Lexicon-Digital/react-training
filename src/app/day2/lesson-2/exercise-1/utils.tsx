export const slowAPIRead = async () => {
    await delay(1000)
    const randomValue = random(10)
    switch (randomValue) {
        case randomValue > 8: return "Sunny"
        case randomValue > 5: return "Rainy"
        default: return "Windy"
    }
}

export const delay = (delayMs: number) => {
    return new Promise(resolve => setTimeout(resolve, delayMs));
};

export const random = (max: number) => {
    return Math.floor(Math.random() * max)
}