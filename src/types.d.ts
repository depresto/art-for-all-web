/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: makeComment
// ====================================================

export interface makeComment_insert_artwork_comment_returning {
  __typename: "artwork_comment";
  artwork_id: any;
  content: string;
  id: number;
  member_id: number;
  created_at: any;
}

export interface makeComment_insert_artwork_comment {
  __typename: "artwork_comment_mutation_response";
  /**
   * data from the rows affected by the mutation
   */
  returning: makeComment_insert_artwork_comment_returning[];
}

export interface makeComment {
  /**
   * insert data into the table: "artwork_comment"
   */
  insert_artwork_comment: makeComment_insert_artwork_comment | null;
}

export interface makeCommentVariables {
  artworkId: any;
  content: string;
  memberId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMembers
// ====================================================

export interface queryMembers_member {
  __typename: "member";
  id: any;
  username: string;
}

export interface queryMembers {
  /**
   * fetch data from the table: "member"
   */
  member: queryMembers_member[];
}

export interface queryMembersVariables {
  _in?: any[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryComments
// ====================================================

export interface queryComments_artwork_comment {
  __typename: "artwork_comment";
  content: string;
  id: number;
  member_id: number;
  created_at: any;
}

export interface queryComments {
  /**
   * fetch data from the table: "artwork_comment"
   */
  artwork_comment: queryComments_artwork_comment[];
}

export interface queryCommentsVariables {
  _eq: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMember
// ====================================================

export interface getMember_member_by_pk {
  __typename: "member";
  id: any;
  username: string;
  email: string;
}

export interface getMember {
  /**
   * fetch data from the table: "member" using primary key columns
   */
  member_by_pk: getMember_member_by_pk | null;
}

export interface getMemberVariables {
  memberId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ARTWORK
// ====================================================

export interface GET_ARTWORK_artwork_by_pk_creator {
  __typename: "creator";
  id: any;
  name: string;
}

export interface GET_ARTWORK_artwork_by_pk_exhibition_artworks {
  __typename: "exhibition_artwork";
  exhibition_id: any;
}

export interface GET_ARTWORK_artwork_by_pk_member_artwork_collections_aggregate_aggregate {
  __typename: "member_artwork_collection_aggregate_fields";
  count: number;
}

export interface GET_ARTWORK_artwork_by_pk_member_artwork_collections_aggregate {
  __typename: "member_artwork_collection_aggregate";
  aggregate: GET_ARTWORK_artwork_by_pk_member_artwork_collections_aggregate_aggregate | null;
}

export interface GET_ARTWORK_artwork_by_pk_comments_member {
  __typename: "member";
  id: any;
  name: string | null;
  avatar_url: string | null;
}

export interface GET_ARTWORK_artwork_by_pk_comments {
  __typename: "artwork_comment";
  id: number;
  content: string;
  /**
   * An object relationship
   */
  member: GET_ARTWORK_artwork_by_pk_comments_member;
}

export interface GET_ARTWORK_artwork_by_pk {
  __typename: "artwork";
  id: any;
  featured_image: string | null;
  images: any | null;
  description: string | null;
  /**
   * An object relationship
   */
  creator: GET_ARTWORK_artwork_by_pk_creator | null;
  material: string | null;
  name: string;
  size: string | null;
  speech: string | null;
  years: number | null;
  /**
   * An array relationship
   */
  exhibition_artworks: GET_ARTWORK_artwork_by_pk_exhibition_artworks[];
  /**
   * An aggregate relationship
   */
  member_artwork_collections_aggregate: GET_ARTWORK_artwork_by_pk_member_artwork_collections_aggregate;
  /**
   * An array relationship
   */
  comments: GET_ARTWORK_artwork_by_pk_comments[];
}

export interface GET_ARTWORK {
  /**
   * fetch data from the table: "artwork" using primary key columns
   */
  artwork_by_pk: GET_ARTWORK_artwork_by_pk | null;
}

export interface GET_ARTWORKVariables {
  artworkId: any;
  memberId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ARTWORKS
// ====================================================

export interface GET_ARTWORKS_artwork_creator {
  __typename: "creator";
  id: any;
  name: string;
}

export interface GET_ARTWORKS_artwork_exhibition_artworks {
  __typename: "exhibition_artwork";
  exhibition_id: any;
}

export interface GET_ARTWORKS_artwork_member_artwork_collections_aggregate_aggregate {
  __typename: "member_artwork_collection_aggregate_fields";
  count: number;
}

export interface GET_ARTWORKS_artwork_member_artwork_collections_aggregate {
  __typename: "member_artwork_collection_aggregate";
  aggregate: GET_ARTWORKS_artwork_member_artwork_collections_aggregate_aggregate | null;
}

export interface GET_ARTWORKS_artwork {
  __typename: "artwork";
  id: any;
  featured_image: string | null;
  images: any | null;
  description: string | null;
  /**
   * An object relationship
   */
  creator: GET_ARTWORKS_artwork_creator | null;
  material: string | null;
  name: string;
  size: string | null;
  speech: string | null;
  years: number | null;
  /**
   * An array relationship
   */
  exhibition_artworks: GET_ARTWORKS_artwork_exhibition_artworks[];
  /**
   * An aggregate relationship
   */
  member_artwork_collections_aggregate: GET_ARTWORKS_artwork_member_artwork_collections_aggregate;
}

export interface GET_ARTWORKS {
  /**
   * fetch data from the table: "artwork"
   */
  artwork: GET_ARTWORKS_artwork[];
}

export interface GET_ARTWORKSVariables {
  memberId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AUDIO_BOOKS
// ====================================================

export interface GET_AUDIO_BOOKS_audio_book {
  __typename: "audio_book";
  id: any;
  title: string;
  featured_image_url: string | null;
  description: string | null;
  duration: any | null;
  creator_name: string | null;
  language: string | null;
  created_at: any;
  updated_at: any;
}

export interface GET_AUDIO_BOOKS {
  /**
   * fetch data from the table: "audio_book"
   */
  audio_book: GET_AUDIO_BOOKS_audio_book[];
}

export interface GET_AUDIO_BOOKSVariables {
  condition: audio_book_bool_exp;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AUDIO_BOOK
// ====================================================

export interface GET_AUDIO_BOOK_audio_book_by_pk {
  __typename: "audio_book";
  id: any;
  title: string;
  featured_image_url: string | null;
  description: string | null;
  content: string | null;
  duration: any | null;
  audio_url: string | null;
  track_url: string | null;
  creator_name: string | null;
  language: string | null;
  created_at: any;
  updated_at: any;
}

export interface GET_AUDIO_BOOK {
  /**
   * fetch data from the table: "audio_book" using primary key columns
   */
  audio_book_by_pk: GET_AUDIO_BOOK_audio_book_by_pk | null;
}

export interface GET_AUDIO_BOOKVariables {
  audioBookId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AUDIO_BOOKS_WITH_CATEGORIES
// ====================================================

export interface GET_AUDIO_BOOKS_WITH_CATEGORIES_category_audio_book_categories_audio_book {
  __typename: "audio_book";
  id: any;
  title: string;
  featured_image_url: string | null;
  description: string | null;
  duration: any | null;
  creator_name: string | null;
  language: string | null;
  created_at: any;
  updated_at: any;
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORIES_category_audio_book_categories {
  __typename: "audio_book_category";
  /**
   * An object relationship
   */
  audio_book: GET_AUDIO_BOOKS_WITH_CATEGORIES_category_audio_book_categories_audio_book;
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORIES_category {
  __typename: "category";
  id: any;
  name: string;
  description: string | null;
  language: string;
  /**
   * An array relationship
   */
  audio_book_categories: GET_AUDIO_BOOKS_WITH_CATEGORIES_category_audio_book_categories[];
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORIES {
  /**
   * fetch data from the table: "category"
   */
  category: GET_AUDIO_BOOKS_WITH_CATEGORIES_category[];
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORIESVariables {
  categoryCondition?: category_bool_exp | null;
  condition: audio_book_category_bool_exp;
  limit?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AUDIO_BOOKS_WITH_CATEGORY
// ====================================================

export interface GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk_audio_book_categories_audio_book {
  __typename: "audio_book";
  id: any;
  title: string;
  featured_image_url: string | null;
  description: string | null;
  duration: any | null;
  creator_name: string | null;
  language: string | null;
  created_at: any;
  updated_at: any;
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk_audio_book_categories {
  __typename: "audio_book_category";
  /**
   * An object relationship
   */
  audio_book: GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk_audio_book_categories_audio_book;
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk {
  __typename: "category";
  id: any;
  name: string;
  description: string | null;
  language: string;
  /**
   * An array relationship
   */
  audio_book_categories: GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk_audio_book_categories[];
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORY {
  /**
   * fetch data from the table: "category" using primary key columns
   */
  category_by_pk: GET_AUDIO_BOOKS_WITH_CATEGORY_category_by_pk | null;
}

export interface GET_AUDIO_BOOKS_WITH_CATEGORYVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY
// ====================================================

export interface GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk_audio_book_categories_audio_book {
  __typename: "audio_book";
  id: any;
  title: string;
  featured_image_url: string | null;
  description: string | null;
  content: string | null;
  duration: any | null;
  audio_url: string | null;
  track_url: string | null;
  creator_name: string | null;
  language: string | null;
  created_at: any;
  updated_at: any;
}

export interface GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk_audio_book_categories {
  __typename: "audio_book_category";
  /**
   * An object relationship
   */
  audio_book: GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk_audio_book_categories_audio_book;
}

export interface GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk {
  __typename: "category";
  id: any;
  name: string;
  description: string | null;
  language: string;
  /**
   * An array relationship
   */
  audio_book_categories: GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk_audio_book_categories[];
}

export interface GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY {
  /**
   * fetch data from the table: "category" using primary key columns
   */
  category_by_pk: GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY_category_by_pk | null;
}

export interface GET_AUDIO_BOOK_DETAILS_WITH_CATEGORYVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_MEMBER_ARTWORK_COLLECTION
// ====================================================

export interface ADD_MEMBER_ARTWORK_COLLECTION_insert_member_artwork_collection_one {
  __typename: "member_artwork_collection";
  id: any;
}

export interface ADD_MEMBER_ARTWORK_COLLECTION {
  /**
   * insert a single row into the table: "member_artwork_collection"
   */
  insert_member_artwork_collection_one: ADD_MEMBER_ARTWORK_COLLECTION_insert_member_artwork_collection_one | null;
}

export interface ADD_MEMBER_ARTWORK_COLLECTIONVariables {
  artworkId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_MEMBER_ARTWORK_COLLECTION
// ====================================================

export interface DELETE_MEMBER_ARTWORK_COLLECTION_delete_member_artwork_collection {
  __typename: "member_artwork_collection_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: number;
}

export interface DELETE_MEMBER_ARTWORK_COLLECTION {
  /**
   * delete data from the table: "member_artwork_collection"
   */
  delete_member_artwork_collection: DELETE_MEMBER_ARTWORK_COLLECTION_delete_member_artwork_collection | null;
}

export interface DELETE_MEMBER_ARTWORK_COLLECTIONVariables {
  artworkId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COLLECTIONS_BY_MEMBER
// ====================================================

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_creator {
  __typename: "creator";
  id: any;
  name: string;
}

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_exhibition_artworks {
  __typename: "exhibition_artwork";
  exhibition_id: any;
}

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_member_artwork_collections_aggregate_aggregate {
  __typename: "member_artwork_collection_aggregate_fields";
  count: number;
}

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_member_artwork_collections_aggregate {
  __typename: "member_artwork_collection_aggregate";
  aggregate: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_member_artwork_collections_aggregate_aggregate | null;
}

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork {
  __typename: "artwork";
  id: any;
  featured_image: string | null;
  images: any | null;
  description: string | null;
  /**
   * An object relationship
   */
  creator: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_creator | null;
  material: string | null;
  name: string;
  size: string | null;
  speech: string | null;
  years: number | null;
  /**
   * An array relationship
   */
  exhibition_artworks: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_exhibition_artworks[];
  /**
   * An aggregate relationship
   */
  member_artwork_collections_aggregate: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork_member_artwork_collections_aggregate;
}

export interface GET_COLLECTIONS_BY_MEMBER_member_artwork_collection {
  __typename: "member_artwork_collection";
  id: any;
  /**
   * An object relationship
   */
  artwork: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection_artwork;
}

export interface GET_COLLECTIONS_BY_MEMBER {
  /**
   * fetch data from the table: "member_artwork_collection"
   */
  member_artwork_collection: GET_COLLECTIONS_BY_MEMBER_member_artwork_collection[];
}

export interface GET_COLLECTIONS_BY_MEMBERVariables {
  memberId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_EXHIBITION
// ====================================================

export interface GET_EXHIBITION_exhibition_exhibition_artworks_artwork_creator {
  __typename: "creator";
  id: any;
  name: string;
}

export interface GET_EXHIBITION_exhibition_exhibition_artworks_artwork_exhibition_artworks {
  __typename: "exhibition_artwork";
  exhibition_id: any;
}

export interface GET_EXHIBITION_exhibition_exhibition_artworks_artwork_member_artwork_collections_aggregate_aggregate {
  __typename: "member_artwork_collection_aggregate_fields";
  count: number;
}

export interface GET_EXHIBITION_exhibition_exhibition_artworks_artwork_member_artwork_collections_aggregate {
  __typename: "member_artwork_collection_aggregate";
  aggregate: GET_EXHIBITION_exhibition_exhibition_artworks_artwork_member_artwork_collections_aggregate_aggregate | null;
}

export interface GET_EXHIBITION_exhibition_exhibition_artworks_artwork {
  __typename: "artwork";
  id: any;
  featured_image: string | null;
  images: any | null;
  description: string | null;
  /**
   * An object relationship
   */
  creator: GET_EXHIBITION_exhibition_exhibition_artworks_artwork_creator | null;
  material: string | null;
  name: string;
  size: string | null;
  speech: string | null;
  years: number | null;
  /**
   * An array relationship
   */
  exhibition_artworks: GET_EXHIBITION_exhibition_exhibition_artworks_artwork_exhibition_artworks[];
  /**
   * An aggregate relationship
   */
  member_artwork_collections_aggregate: GET_EXHIBITION_exhibition_exhibition_artworks_artwork_member_artwork_collections_aggregate;
}

export interface GET_EXHIBITION_exhibition_exhibition_artworks {
  __typename: "exhibition_artwork";
  /**
   * An object relationship
   */
  artwork: GET_EXHIBITION_exhibition_exhibition_artworks_artwork;
}

export interface GET_EXHIBITION_exhibition {
  __typename: "exhibition";
  id: any;
  name: string;
  featured_image: string | null;
  /**
   * An array relationship
   */
  exhibition_artworks: GET_EXHIBITION_exhibition_exhibition_artworks[];
}

export interface GET_EXHIBITION {
  /**
   * fetch data from the table: "exhibition"
   */
  exhibition: GET_EXHIBITION_exhibition[];
}

export interface GET_EXHIBITIONVariables {
  condition: exhibition_bool_exp;
  memberId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_EXHIBITIONS
// ====================================================

export interface GET_EXHIBITIONS_exhibition_exhibition_artworks_aggregate_aggregate {
  __typename: "exhibition_artwork_aggregate_fields";
  count: number;
}

export interface GET_EXHIBITIONS_exhibition_exhibition_artworks_aggregate {
  __typename: "exhibition_artwork_aggregate";
  aggregate: GET_EXHIBITIONS_exhibition_exhibition_artworks_aggregate_aggregate | null;
}

export interface GET_EXHIBITIONS_exhibition {
  __typename: "exhibition";
  id: any;
  name: string;
  featured_image: string | null;
  /**
   * An aggregate relationship
   */
  exhibition_artworks_aggregate: GET_EXHIBITIONS_exhibition_exhibition_artworks_aggregate;
}

export interface GET_EXHIBITIONS {
  /**
   * fetch data from the table: "exhibition"
   */
  exhibition: GET_EXHIBITIONS_exhibition[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_TAGS
// ====================================================

export interface GET_TAGS_tag {
  __typename: "tag";
  id: any;
  name: string;
}

export interface GET_TAGS {
  /**
   * fetch data from the table: "tag"
   */
  tag: GET_TAGS_tag[];
}

export interface GET_TAGSVariables {
  condition: tag_bool_exp;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
}

/**
 * Boolean expression to filter rows from the table "artwork". All fields are combined with a logical 'AND'.
 */
export interface artwork_bool_exp {
  _and?: artwork_bool_exp[] | null;
  _not?: artwork_bool_exp | null;
  _or?: artwork_bool_exp[] | null;
  comments?: artwork_comment_bool_exp | null;
  creator?: creator_bool_exp | null;
  creator_id?: uuid_comparison_exp | null;
  description?: String_comparison_exp | null;
  exhibition_artworks?: exhibition_artwork_bool_exp | null;
  favorites?: favorite_bool_exp | null;
  featured_image?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  images?: jsonb_comparison_exp | null;
  material?: String_comparison_exp | null;
  member_artwork_collections?: member_artwork_collection_bool_exp | null;
  museum?: museum_bool_exp | null;
  museum_id?: bigint_comparison_exp | null;
  name?: String_comparison_exp | null;
  playlist_items?: playlist_item_bool_exp | null;
  reviews?: review_bool_exp | null;
  size?: String_comparison_exp | null;
  speech?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  years?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "artwork_comment". All fields are combined with a logical 'AND'.
 */
export interface artwork_comment_bool_exp {
  _and?: artwork_comment_bool_exp[] | null;
  _not?: artwork_comment_bool_exp | null;
  _or?: artwork_comment_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: Int_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "audio_book". All fields are combined with a logical 'AND'.
 */
export interface audio_book_bool_exp {
  _and?: audio_book_bool_exp[] | null;
  _not?: audio_book_bool_exp | null;
  _or?: audio_book_bool_exp[] | null;
  audio_book_categories?: audio_book_category_bool_exp | null;
  audio_book_tags?: audio_book_tag_bool_exp | null;
  audio_url?: String_comparison_exp | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  creator_name?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  duration?: numeric_comparison_exp | null;
  featured_image_url?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  language?: String_comparison_exp | null;
  member_audio_book_collections?: member_audio_book_collection_bool_exp | null;
  member_audio_book_favorites?: member_audio_book_favorite_bool_exp | null;
  title?: String_comparison_exp | null;
  track_url?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "audio_book_category". All fields are combined with a logical 'AND'.
 */
export interface audio_book_category_bool_exp {
  _and?: audio_book_category_bool_exp[] | null;
  _not?: audio_book_category_bool_exp | null;
  _or?: audio_book_category_bool_exp[] | null;
  audio_book?: audio_book_bool_exp | null;
  audio_book_id?: bigint_comparison_exp | null;
  category?: category_bool_exp | null;
  category_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "audio_book_tag". All fields are combined with a logical 'AND'.
 */
export interface audio_book_tag_bool_exp {
  _and?: audio_book_tag_bool_exp[] | null;
  _not?: audio_book_tag_bool_exp | null;
  _or?: audio_book_tag_bool_exp[] | null;
  audio_book?: audio_book_bool_exp | null;
  audio_book_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'.
 */
export interface bigint_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'.
 */
export interface category_bool_exp {
  _and?: category_bool_exp[] | null;
  _not?: category_bool_exp | null;
  _or?: category_bool_exp[] | null;
  audio_book_categories?: audio_book_category_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  language?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "creator". All fields are combined with a logical 'AND'.
 */
export interface creator_bool_exp {
  _and?: creator_bool_exp[] | null;
  _not?: creator_bool_exp | null;
  _or?: creator_bool_exp[] | null;
  artworks?: artwork_bool_exp | null;
  avatarUrl?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "exhibition_artwork". All fields are combined with a logical 'AND'.
 */
export interface exhibition_artwork_bool_exp {
  _and?: exhibition_artwork_bool_exp[] | null;
  _not?: exhibition_artwork_bool_exp | null;
  _or?: exhibition_artwork_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  exhibition?: exhibition_bool_exp | null;
  exhibition_id?: bigint_comparison_exp | null;
  id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "exhibition". All fields are combined with a logical 'AND'.
 */
export interface exhibition_bool_exp {
  _and?: exhibition_bool_exp[] | null;
  _not?: exhibition_bool_exp | null;
  _or?: exhibition_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  exhibition_artworks?: exhibition_artwork_bool_exp | null;
  featured_image?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "favorite". All fields are combined with a logical 'AND'.
 */
export interface favorite_bool_exp {
  _and?: favorite_bool_exp[] | null;
  _not?: favorite_bool_exp | null;
  _or?: favorite_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'.
 */
export interface jsonb_comparison_exp {
  _contained_in?: any | null;
  _contains?: any | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _has_key?: string | null;
  _has_keys_all?: string[] | null;
  _has_keys_any?: string[] | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "member_artwork_collection". All fields are combined with a logical 'AND'.
 */
export interface member_artwork_collection_bool_exp {
  _and?: member_artwork_collection_bool_exp[] | null;
  _not?: member_artwork_collection_bool_exp | null;
  _or?: member_artwork_collection_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "member_audio_book_collection". All fields are combined with a logical 'AND'.
 */
export interface member_audio_book_collection_bool_exp {
  _and?: member_audio_book_collection_bool_exp[] | null;
  _not?: member_audio_book_collection_bool_exp | null;
  _or?: member_audio_book_collection_bool_exp[] | null;
  audio_book_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "member_audio_book_favorite". All fields are combined with a logical 'AND'.
 */
export interface member_audio_book_favorite_bool_exp {
  _and?: member_audio_book_favorite_bool_exp[] | null;
  _not?: member_audio_book_favorite_bool_exp | null;
  _or?: member_audio_book_favorite_bool_exp[] | null;
  audio_book?: audio_book_bool_exp | null;
  audio_book_id?: bigint_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'.
 */
export interface member_bool_exp {
  _and?: member_bool_exp[] | null;
  _not?: member_bool_exp | null;
  _or?: member_bool_exp[] | null;
  avatar_url?: String_comparison_exp | null;
  category?: Int_comparison_exp | null;
  comments?: artwork_comment_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  email?: String_comparison_exp | null;
  favorites?: favorite_bool_exp | null;
  id?: bigint_comparison_exp | null;
  login_at?: timestamptz_comparison_exp | null;
  member_artwork_collections?: member_artwork_collection_bool_exp | null;
  member_audio_book_collections?: member_audio_book_collection_bool_exp | null;
  member_audio_book_favorites?: member_audio_book_favorite_bool_exp | null;
  name?: String_comparison_exp | null;
  password?: String_comparison_exp | null;
  password_hash?: String_comparison_exp | null;
  playlists?: playlist_bool_exp | null;
  refresh_token?: String_comparison_exp | null;
  reviews?: review_bool_exp | null;
  role?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  username?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "museum". All fields are combined with a logical 'AND'.
 */
export interface museum_bool_exp {
  _and?: museum_bool_exp[] | null;
  _not?: museum_bool_exp | null;
  _or?: museum_bool_exp[] | null;
  artworks?: artwork_bool_exp | null;
  id?: bigint_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "playlist". All fields are combined with a logical 'AND'.
 */
export interface playlist_bool_exp {
  _and?: playlist_bool_exp[] | null;
  _not?: playlist_bool_exp | null;
  _or?: playlist_bool_exp[] | null;
  exhibition_detail?: String_comparison_exp | null;
  exhibition_name?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: bigint_comparison_exp | null;
  playlist_items?: playlist_item_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "playlist_item". All fields are combined with a logical 'AND'.
 */
export interface playlist_item_bool_exp {
  _and?: playlist_item_bool_exp[] | null;
  _not?: playlist_item_bool_exp | null;
  _or?: playlist_item_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  playlist?: playlist_bool_exp | null;
  playlist_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'.
 */
export interface review_bool_exp {
  _and?: review_bool_exp[] | null;
  _not?: review_bool_exp | null;
  _or?: review_bool_exp[] | null;
  artwork?: artwork_bool_exp | null;
  artwork_id?: bigint_comparison_exp | null;
  feedback?: String_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: bigint_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'.
 */
export interface tag_bool_exp {
  _and?: tag_bool_exp[] | null;
  _not?: tag_bool_exp | null;
  _or?: tag_bool_exp[] | null;
  audio_book_tags?: audio_book_tag_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: bigint_comparison_exp | null;
  language?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
