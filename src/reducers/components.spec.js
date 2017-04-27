import components from './components'


/**
 * Partitions:
 * initial state: empty, non-empty dictionary
 * actions: 
 *  ADD_NEW_COMPONENT
 *      store empty, nonempty
 *      screenId = null (only null if component type is form), not null
 *      
 *  UPDATE_COMPONENT
 *      property already exists, not stored yet
 *  DELETE_COMPONENT
 *  default
 * 
 */
const screen1 = {
    name:"Screen1", 
    componentType:"Form", 
    version:"20", 
    AboutScreen:"This is an App!",
    AppName:"Hello2",
    Title:"Screen1", 
    Uuid:"0"}

const screen2 = {
    name:"Screen2",
    componentType: "Form",
    version:"20", 
    Uuid:"1"
}

const button1 = {
    name:"Button1",
    componentType:"Button",
    Uuid:"2",
    version:"1"
}

describe('components reducer',() => {
    it('should return the initial state', () => {
        expect(
            components(undefined, {})
        ).toEqual([])

        expect(
            components([], {})
        ).toEqual([])

        expect(
            components([screen1], {})
            ).toEqual([screen1])
    })

    it('should handle ADD_NEW_COMPONENT', () => {
        // add a screen to store with existing screen (screenId is null)
        expect(
            components([screen1], {
                type: 'ADD_NEW_COMPONENT',
                name:"Screen2",
                componentType:"Form",
                Uuid:"2",
                version:"1",
                screenId: null
            })
        ).toEqual([screen1, {
            name:"Screen2", 
            componentType:"Form", 
            version:"1", 
            Uuid:"2"}])

        expect(
            components([screen1, screen2], {
                type: 'ADD_NEW_COMPONENT',
                name:"Button1",
                componentType:"Button",
                Uuid:"2",
                version:"1",
                screenId: "0"
            })
        ).toEqual([
            {...screen1, children:["2"]},
            screen2,
            {
                name:"Button1",
                componentType:"Button",
                Uuid:"2",
                version:"1"
            }
        ])
    })
    
    it('should handle UPDATE_COMPONENT', () => {
        expect(
            components([{...screen1, children:["2"]}, screen2, button1], {
                type: 'UPDATE_COMPONENT',
                id: "2",
                propertyName: "FontSize",
                propertyInputValue: "20.0",
            })
        ).toEqual([
            {...screen1, children:["2"]}, screen2, {...button1, FontSize:"20.0"}
        ])

        expect(
            components([
                {...screen1, children:["2"]}, screen2, {...button1, FontSize:"14.0"}], {
                    type: 'UPDATE_COMPONENT',
                    id: "2",
                    propertyName: "FontSize",
                    propertyInputValue: "20.0",
            })
        ).toEqual([
            {...screen1, children:["2"]}, screen2, {...button1, FontSize:"20.0"}
        ])

    })

    it('should handle DELETE_COMPONENT', () => {
        expect(
            components([], {
                type: 'DELETE_COMPONENT',
                id:"",
                selectedScreen: ""
            })
            ).toEqual()
    })

})