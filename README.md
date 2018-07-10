# Hoverable react component

On hover component that uses render props to show correct component

### Usage

```
import Hoverable from 'hoverable-react'

<Hoverable 
    render={hovered => 
        hovered ? <div>Im hovered</div> : <div>Im not hovered</div>
    }    
/>
```

```
Props:
    className - applied to wrapper div
    styles - applied to wrapper div
```


## Authors

*   **Luke Robertson** - [DesignAlchemy](https://github.com/designalchemy/)
*   **Chris Golding** - [cpg94](https://github.com/cpg94)

## License

Public
