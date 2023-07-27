import { omit } from "lodash";

import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("category constructor", () => {
    let category = new Category({
      name: "Movie",
      is_active: true,
      description: null,
    });
    const actual = omit(category.props, "created_at");

    expect(actual).toStrictEqual({
      name: "Movie",
      is_active: true,
      description: null,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);



    category = new Category({
      name: "Movie",
      is_active: false,
      description: "this is a very nice description",
    });
    let created_at = new Date();

    expect(category.props).toStrictEqual({
      name: "Movie",
      is_active: false,
      description: "this is a very nice description",
      created_at,
    });



    category = new Category({
      name: "Movie",
      description: "some other description",
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "some other description",
    });




    category = new Category({
      name: "Movie",
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });




    created_at = new Date()
    category = new Category({
      name: "Movie",
      created_at
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      created_at
    });
  });

  test("getter of name field", () => {
    const category = new Category({name: 'Movie'})
    expect(category.props.name).toBe('Movie')
  })


  test("getter and setter of description field", () => {
    let category = new Category({name: 'Movie'})
    expect(category.props.description).toBeNull()

    category = new Category({name: 'Movie', description: 'some description'})
    expect(category.props.description).toBe('some description')

    category = new Category({name: 'Movie'})

    category['description'] = undefined
    expect(category.description).toBeNull()

    category['description'] = null
    expect(category.description).toBeNull()

    category['description'] = 'new description'
    expect(category.description).toBe('new description')
  })

  test("getter and setter of is_active field", () => {
    let category = new Category({name: 'Movie'})
    expect(category.props.is_active).toBeTruthy()

    category = new Category({name: 'Movie', is_active: false})
    expect(category.props.is_active).toBe(false)

    category = new Category({name: 'Movie'})

    category['is_active'] = undefined
    expect(category.is_active).toBeNull()

    category['is_active'] = null
    expect(category.is_active).toBeNull()

    category['is_active'] = true
    expect(category.is_active).toBeTruthy()
  })

  test("getter of created_at field", () => {
    let category = new Category({name: 'Movie'})
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date()
    category = new Category({name: 'Movie', created_at})
    expect(category.created_at).toBe(created_at)

  })
});
