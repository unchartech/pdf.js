import FuseSearch from "../../web/fuse.esm.js";
import { PAGES } from "./test_data/parsed_pages";

describe("Test fusy search implementation", () => {
  let fuse;

  beforeEach(() => {
    fuse = new FuseSearch(PAGES.PAGE_17);
  });

  it("make list of string", () => {
    const query =
      "In addition, the production of secondary, recycled products is much cheaper than manufacturing";

    fuse._prepare_fuse_list(query);
    expect(fuse._content_list).toEqual([
      "materials.In  addition,  the  production  of  secondary,  recycled  products  is  muchcheaper  than  manufacturing",
    ]);
  });

  it("make many list of string", () => {
    const query = "are, on average, three to four times lower than";

    fuse._prepare_fuse_list(query);
    expect(fuse._content_list).toEqual([
      "are, on average, three to four times lower than",
    ]);

    const index = fuse.search(query);
    expect(index).toEqual(null);
  });

  it("make many result list of string", () => {
    const query = "are  found  primarily  in  buildings,  packaging,  automobiles  andindustrial equipment. User industries are";

    fuse._prepare_fuse_list(query);
    expect(fuse._content_list.length).toEqual(78);
  });
});
