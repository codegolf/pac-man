# Pac-Man in 365 Bytes of HTML+JS

Based on the the [oldskool remake by @maettig ](http://maettig.com/code/javascript/pac-man-in-140byt.es.html) of the classic arcade game Pac-Man. Golfed down by @aemkei, @p01, @subzey, @xem, @0ndras, @maettig. See the original [gist](https://gist.github.com/maettig/1384306).

### Demo

[PLAY THE DEMO](http://output.jsbin.com/hitige/quiet)!

Use your keyboard to control the movement.

### Source

```html
<body onload='for(l=D=11;d=k=D--;x=78)l+=[8191,4161,5981,
5125,5589,5397,5493][D<7?D:10-D].toString(2)+3;l=l.split(
""),setInterval(onkeydown=function(a){for(a?k=a.which-38:
x^X&&(h=i=l[x]=2,l[x+=d=k+1>>2||9&l[x+(o=k%2?k:~-k*14)]?9
&l[x+d]?0:d:o]=4,l[X]&=7,b=D%4-2,b=b++%2||b*14,9&l[X+b]?D
++:X+=b,l[X]|=8);154>i;)p.innerHTML=h+=".# \no"[l[++i]]||
"x"},X=151)'><pre id=p>
```

### Gameplay Video

![Pac-Man](https://raw.githubusercontent.com/codegolf/pac-man/master/pacman.gif)

### Board Layout

```
#############
#     #    .#       #   = Wall
# ### # ###.#
# # X    .#.#       X   = Ghost
# # # ###.#.#
# # # o #.#.#       o   = Player
# # ### #.#.#
# # ......#.#       .   = Gold
# ### #.###.#
#.....#.....#
#############
```