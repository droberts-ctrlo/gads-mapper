# @ctrlo/mapper

Mapping library for form data and general use

## Functions

### map

#### Expected input format

The input object for the mapper is as follows:

```typescript
{
    error: number, // 1 or 0, depending on if there's an error
    records: { // Input records
        label: string,
        id: number
    }
}
```

#### Function Usage

```javascript
const result = map(input);
```

Map the input to a pre-defined output format

#### Expected output format

```typescript
{
    name: string, // as given in the input records
    id: number // as given in the input records
}[]
```

### formdataMapper

Maps a JSON/JavaScript object to a `FormData` object using the object keys as the data keys, and their values as the data values

```javascript
const data = formdataMapper(input);
```
