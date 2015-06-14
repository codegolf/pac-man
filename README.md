# Pac-Man in < 512 Bytes of HTML+JS

Based on the the [oldskool remake by @maettig ](http://maettig.com/code/javascript/pac-man-in-140byt.es.html) of the classic arcade game Pac-Man. Golfed down by @aemkei. See the original [gist](https://gist.github.com/maettig/1384306).

### Demo

[PLAY THE DEMO](http://output.jsbin.com/hitige/quiet)!

Use your keyboard to control the movement.

### Source (469 Bytes)

```html
<pre id=p><script>l="";for(i in L=[a=8191,b=4161,c=5981,d=5125,5493,5397
,5589,d,c,b,a])l+=L[i].toString(2).replace(/1/g,4).replace(/0/g,2)+3;l=l
.split(""),w=14,x=76,X=48,e=d=k=D=!setInterval(onkeydown=function(a){if(
a)k=a.which;else if(!e){for(l[x]=0,l[x+=d=k-37>>2||4&l[x+(o=k%2?k-38:(k-
39)*w)]?4&l[x+d]?0:d:o],e|=8&l[x],l[x]=1,l[X]&=7,h=D%4,h=h%2?h-2:(h-1)*w
,4&l[X+h]?D++:e|=1&l[X+=h],l[X]|=8,h=i=0;153>i;)h+=" o.\n#   x"[8&l[++i]
||l[i]];p.innerHTML=h}},250)</script>
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

### Annotated Source

```html
<pre id=p><script>
l = ""
for (i in L = [
  a = 8191,                               // #############
  b = 4161,                               // #     #     #
  c = 5981,                               // # ### # ### #
  d = 5125,                               // # #       # #
  5493,                                   // # # # ### # #
  5397,                                   // # # #   # # #
  5589,                                   // # # ### # # #
  d,                                      // # #       # #
  c,                                      // # ### # ### #
  b,                                      // #     #     #
  a                                       // #############
]
) l += L[i]
  .toString(2)                            // convert to binary
  .replace(/1/g, 4)                       // replace full blocks
  .replace(/0/g, 2)                       // repace empty blocks
  + 3;                                    // placeholder for \n

l = l.split("");

w = 14;                                   // width
x = 76;                                   // players x position
X = 48;                                   // ghost x position

e =                                       // game ended
d =                                       // player direction
k =                                       // last keycode
D = !                                     // ghost direction

setInterval(onkeydown = function(v) {

  if (v) {
    k = v.which                           // get key code
  } else if (!e){
    l[x] = 0;                             // reset cell
    l[
      x += d = k - 37 >> 2 || l[          // update player direction
        x + (                             // update player position
          o =                             // calculate offset
            k % 2 ?                       // horizontal or vertical movement
            k - 38 :                      // = horizontal
            (k - 39) * w                  // = vertical
        )
      ] & 4 ? l[x + d] & 4 ? 0 : d : o    // detect wall collision
    ];
    e |= l[x] & 8;                        // test if player hits ghost
    l[x] = 1;                             // set player at new position
    l[X] &= 7;                            // remove ghost first

    h = D % 4;
    h = h % 2 ? h - 2 : (h - 1) * w;      // calculate walking direction
    l[X + h] & 4                          // if walking into a wall
      ? D++                               // rotate ghost by 90 degree
      : e |= 1 & l[                       // else check if hitting the player
        X += h                            // and walk
      ];
    l[X] |= 8                             // place ghost

    for (h = i = 0; i < 153; )
      h += ' o.\n#   x'[                  // 0 =   = empty
                                          // 1 = o = player
                                          // 2 = . = gold
                                          // 4 = # = wall
                                          // 8 = x = ghost
                                          // 3 = \n placeholder
        l[++i] & 8                        // get character
        || l[i]                           // fallback to original char
      ]

    p.innerHTML = h
  }
}, 250)
</script>
```
