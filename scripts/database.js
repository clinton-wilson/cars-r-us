const database = {
    colors: [
        {
            id: 1,
            color: "Silver",
            price: 299
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 250
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 399
        },
        {
            id: 4,
            color: "Spring Green",
            price: 200
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 100
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 125
        },
        {
            id: 3,
            type: "White Leather",
            price: 200
        },
        {
            id: 4,
            type: "Black Leather",
            price: 250
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 350
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 400
        },
        {
            id: 3,
            package: "Visibility Package (includes side and rear cameras",
            price: 450
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 700
        }
    ],
    wheels: [
        {
            id: 1,
            size: "17-inch Pair Radial",
            price: 500
        },
        {
            id: 2,
            size: "17-inch Pair Radial Black",
            price: 600
        },
        {
            id: 3,
            size: "18-inch Pair Spoke Silver",
            price: 700
        },
        {
            id: 4,
            size: "18-inch Pair Spoke Black",
            price: 800
        }
    ],
    customCars: [
        {
            id: 1,
            paintsId: 1,
            interiorId: 1,
            technologiesId: 1,
            wheelsId: 1
        }

    ],
    orderBuilder: {}
    
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCustomCars = () => {
    return database.customCars.map(customCar => ({...customCar}))
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setPaints = (id) => {
    database.orderBuilder.paintsId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologiesId = id
}

export const customCarOrder = () => {
    // Copies curretn state of user choices
    const newOrder = {...database.orderBuilder}

    // Add new primary key to the object
    const lastIndex = database.customCars.length - 1
    newOrder.id =database.customCars[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add new order object toe custom orders state
    database.customCars.push(newOrder)
 
    // Reset the temp state for user choices
    database.orderBuilder = {}

    // Notify that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
