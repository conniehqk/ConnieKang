export default {
    Python: `
    
    # If I was a class instance...

    class SoftwareEngineer(DataAnalyst):
    
        def __init__(self, **kwargs):
            for key, value in kwargs.items():
                setattr(self, key, value)
        
        def greetings(self):
            print("Hello world, welcome to my website!")
    
    ConnieKang = SoftwareEngineer(
        name: "Connie Kang",
        pronounce: "she/her",
        email: "hqk1121@gmail.com",
        canHire: True
    )

    ConnieKang.greetings()

        `,
    Ruby: `
    
    # If I am a class instance...

    class SoftwareEngineer << DataAnalyst

        def initialize(*args)
            @name, @pronouns, @email, @canHire, *nada = args
            fail "Too many arguments" unless nada.empty?
        end

        def greetings
            p "Hello World, welcome to my website!
        end

    end

    ConnieKang = SoftwareEngineer.new(
        name: "Connie Kang",
        pronounce: "she/her",
        email: "hqk1121@gmail.com",
        canHire: True
    )

    ConnieKang.greetings

    `,
    JavaScript: `
    
    // If I was a class instance...

    class SoftwareEngineer extends DataAnalyst {

        constructor(args) {
            Object.assign(this, args);
        }

        greetings() {
            console.log("Hello world, welcome to my website!");
        }
    }
    
    let ConnieKang = new SoftwareEngineer({
        name: "Connie Kang",
        pronounce: "she/her",
        email: "hqk1121@gmail.com",
        canHire: True
    });

    ConnieKang.greetings();

    `
};