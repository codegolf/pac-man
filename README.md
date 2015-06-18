# Pac-Man in 348 Bytes of HTML+JS

Based on the the [oldskool remake by @maettig ](http://maettig.com/code/javascript/pac-man-in-140byt.es.html) of the classic arcade game Pac-Man. Golfed down by @aemkei, @p01, @subzey, @xem, @0ndras, @maettig. See the original [gist](https://gist.github.com/maettig/1384306).

### Demo

[PLAY THE DEMO](http://rawgit.com/codegolf/pac-man/master/index.html)!

Use your keyboard to control the movement.

### Source

```html
<body onload=for(l=D=11;d=k=D--;x=78)l+="῿
၁᝝ᐅᗕᔕᕵ".charCodeAt(D<7?D:10-D).toString(2)
+3;l=l.split(""),setInterval("if(x^X)for(h
=i=l[x]=2,l[x+=d=2%k||9&l[x+(o=k%2||~-k*14
)]?9&l[x+d]?0:d:o]=4,l[X]&=7,b=D%4-2,b=b++
%2||b*14,9&l[X+b]?D++:X+=b,l[X]|=8;i<154;)
p.innerHTML=h+='.# \\nx'[l[++i]]||0",X=151
) onkeydown=k=event.which-38><pre id=p>
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