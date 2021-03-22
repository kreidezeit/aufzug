def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # . # #
            """)
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            # # . # #
            # . . . #
            """)
        basic.show_leds("""
            . # # # .
            # # # # #
            # # . # #
            # . . . #
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # . # #
            # . . . #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . # #
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
    else:
        basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
