# Movie Ticket Booking System
# Improved and Refactored Code

# Function to select a movie name
def select_movie():
    print("Which movie do you want to watch?")
    print("1. Mufasa: The Lion King")
    print("2. Pushpa 2")
    print("3. Marco")
    print("4. Back")

    try:
        movie_choice = int(input("Choose your movie: "))
        if movie_choice == 4:
            select_theater()
        elif movie_choice in [1, 2, 3]:
            select_screen()
        else:
            print("Invalid choice. Please try again.")
            select_movie()
    except ValueError:
        print("Please enter a valid number.")
        select_movie()

# Function to select a screen type
def select_screen():
    print("Which screen type do you want to watch the movie on?")
    print("1. SCREEN 2D")
    print("2. SCREEN 3D")
    print("3. SCREEN HDR")

    try:
        screen_choice = int(input("Choose your screen type: "))
        tickets = int(input("How many tickets do you want?: "))
        select_timing(screen_choice)
    except ValueError:
        print("Please enter a valid number.")
        select_screen()

# Function to select the movie timing
def select_timing(screen_choice):
    timings = {
        1: {"1": "10:00 AM - 1:00 PM", "2": "1:10 PM - 4:10 PM", "3": "4:20 PM - 7:20 PM", "4": "7:30 PM - 10:30 PM"},
        2: {"1": "10:15 AM - 1:15 PM", "2": "1:25 PM - 4:25 PM", "3": "4:35 PM - 7:35 PM", "4": "7:45 PM - 10:45 PM"},
        3: {"1": "10:30 AM - 1:30 PM", "2": "1:40 PM - 4:40 PM", "3": "4:50 PM - 7:50 PM", "4": "8:00 PM - 10:45 PM"}
    }

    if screen_choice in timings:
        print("Choose your time:")
        for key, value in timings[screen_choice].items():
            print(f"{key}. {value}")

        try:
            time_choice = input("Select your time: ")
            if time_choice in timings[screen_choice]:
                print(f"Booking successful! Enjoy your movie at {timings[screen_choice][time_choice]}.")
            else:
                print("Invalid time choice. Please try again.")
                select_timing(screen_choice)
        except ValueError:
            print("Please enter a valid time.")
            select_timing(screen_choice)
    else:
        print("Invalid screen choice. Please try again.")
        select_screen()

# Function to select a theater
def select_theater():
    print("Which theater do you wish to see the movie at?")
    print("1. Inox")
    print("2. Icon")
    print("3. PVP")
    print("4. Back")

    try:
        theater_choice = int(input("Choose your option: "))
        if theater_choice in [1, 2, 3]:
            select_movie()
        elif theater_choice == 4:
            select_city()
        else:
            print("Invalid choice. Please try again.")
            select_theater()
    except ValueError:
        print("Please enter a valid number.")
        select_theater()

# Function to select a city
def select_city():
    print("Hi, welcome to the movie ticket booking system!")
    print("Where do you want to watch the movie?")
    print("1. Delhi NCR")
    print("2. Gurugram")
    print("3. Noida")

    try:
        city_choice = int(input("Choose your option: "))
        if city_choice in [1, 2, 3]:
            select_theater()
        else:
            print("Invalid choice. Please try again.")
            select_city()
    except ValueError:
        print("Please enter a valid number.")
        select_city()

# Start the booking process
select_city()
