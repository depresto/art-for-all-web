export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  jsonb: any
  numeric: any
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "artwork" */
export type artwork = {
  __typename: 'artwork'
  /** An array relationship */
  comments: Array<artwork_comment>
  /** An aggregate relationship */
  comments_aggregate: artwork_comment_aggregate
  /** An object relationship */
  creator: Maybe<creator>
  creator_id: Maybe<Scalars['uuid']>
  description: Maybe<Scalars['String']>
  /** An array relationship */
  exhibition_artworks: Array<exhibition_artwork>
  /** An aggregate relationship */
  exhibition_artworks_aggregate: exhibition_artwork_aggregate
  /** An array relationship */
  favorites: Array<favorite>
  /** An aggregate relationship */
  favorites_aggregate: favorite_aggregate
  featured_image: Maybe<Scalars['String']>
  id: Scalars['bigint']
  images: Maybe<Scalars['jsonb']>
  material: Maybe<Scalars['String']>
  /** An array relationship */
  member_artwork_collections: Array<member_artwork_collection>
  /** An aggregate relationship */
  member_artwork_collections_aggregate: member_artwork_collection_aggregate
  /** An object relationship */
  museum: museum
  museum_id: Scalars['bigint']
  name: Scalars['String']
  /** An array relationship */
  playlist_items: Array<playlist_item>
  /** An aggregate relationship */
  playlist_items_aggregate: playlist_item_aggregate
  /** An array relationship */
  reviews: Array<review>
  /** An aggregate relationship */
  reviews_aggregate: review_aggregate
  size: Maybe<Scalars['String']>
  speech: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
  years: Maybe<Scalars['Int']>
}

/** columns and relationships of "artwork" */
export type artworkcommentsArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkcomments_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkexhibition_artworksArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkexhibition_artworks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkfavoritesArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkfavorites_aggregateArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkimagesArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "artwork" */
export type artworkmember_artwork_collectionsArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkmember_artwork_collections_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkplaylist_itemsArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkplaylist_items_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkreviewsArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

/** columns and relationships of "artwork" */
export type artworkreviews_aggregateArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

/** aggregated selection of "artwork" */
export type artwork_aggregate = {
  __typename: 'artwork_aggregate'
  aggregate: Maybe<artwork_aggregate_fields>
  nodes: Array<artwork>
}

/** aggregate fields of "artwork" */
export type artwork_aggregate_fields = {
  __typename: 'artwork_aggregate_fields'
  avg: Maybe<artwork_avg_fields>
  count: Scalars['Int']
  max: Maybe<artwork_max_fields>
  min: Maybe<artwork_min_fields>
  stddev: Maybe<artwork_stddev_fields>
  stddev_pop: Maybe<artwork_stddev_pop_fields>
  stddev_samp: Maybe<artwork_stddev_samp_fields>
  sum: Maybe<artwork_sum_fields>
  var_pop: Maybe<artwork_var_pop_fields>
  var_samp: Maybe<artwork_var_samp_fields>
  variance: Maybe<artwork_variance_fields>
}

/** aggregate fields of "artwork" */
export type artwork_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<artwork_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "artwork" */
export type artwork_aggregate_order_by = {
  avg?: InputMaybe<artwork_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<artwork_max_order_by>
  min?: InputMaybe<artwork_min_order_by>
  stddev?: InputMaybe<artwork_stddev_order_by>
  stddev_pop?: InputMaybe<artwork_stddev_pop_order_by>
  stddev_samp?: InputMaybe<artwork_stddev_samp_order_by>
  sum?: InputMaybe<artwork_sum_order_by>
  var_pop?: InputMaybe<artwork_var_pop_order_by>
  var_samp?: InputMaybe<artwork_var_samp_order_by>
  variance?: InputMaybe<artwork_variance_order_by>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type artwork_append_input = {
  images?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "artwork" */
export type artwork_arr_rel_insert_input = {
  data: Array<artwork_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<artwork_on_conflict>
}

/** aggregate avg on columns */
export type artwork_avg_fields = {
  __typename: 'artwork_avg_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "artwork" */
export type artwork_avg_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "artwork". All fields are combined with a logical 'AND'. */
export type artwork_bool_exp = {
  _and?: InputMaybe<Array<artwork_bool_exp>>
  _not?: InputMaybe<artwork_bool_exp>
  _or?: InputMaybe<Array<artwork_bool_exp>>
  comments?: InputMaybe<artwork_comment_bool_exp>
  creator?: InputMaybe<creator_bool_exp>
  creator_id?: InputMaybe<uuid_comparison_exp>
  description?: InputMaybe<String_comparison_exp>
  exhibition_artworks?: InputMaybe<exhibition_artwork_bool_exp>
  favorites?: InputMaybe<favorite_bool_exp>
  featured_image?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  images?: InputMaybe<jsonb_comparison_exp>
  material?: InputMaybe<String_comparison_exp>
  member_artwork_collections?: InputMaybe<member_artwork_collection_bool_exp>
  museum?: InputMaybe<museum_bool_exp>
  museum_id?: InputMaybe<bigint_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
  playlist_items?: InputMaybe<playlist_item_bool_exp>
  reviews?: InputMaybe<review_bool_exp>
  size?: InputMaybe<String_comparison_exp>
  speech?: InputMaybe<String_comparison_exp>
  type?: InputMaybe<String_comparison_exp>
  years?: InputMaybe<Int_comparison_exp>
}

/** columns and relationships of "artwork_comment" */
export type artwork_comment = {
  __typename: 'artwork_comment'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  content: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An object relationship */
  member: member
  member_id: Scalars['Int']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "artwork_comment" */
export type artwork_comment_aggregate = {
  __typename: 'artwork_comment_aggregate'
  aggregate: Maybe<artwork_comment_aggregate_fields>
  nodes: Array<artwork_comment>
}

/** aggregate fields of "artwork_comment" */
export type artwork_comment_aggregate_fields = {
  __typename: 'artwork_comment_aggregate_fields'
  avg: Maybe<artwork_comment_avg_fields>
  count: Scalars['Int']
  max: Maybe<artwork_comment_max_fields>
  min: Maybe<artwork_comment_min_fields>
  stddev: Maybe<artwork_comment_stddev_fields>
  stddev_pop: Maybe<artwork_comment_stddev_pop_fields>
  stddev_samp: Maybe<artwork_comment_stddev_samp_fields>
  sum: Maybe<artwork_comment_sum_fields>
  var_pop: Maybe<artwork_comment_var_pop_fields>
  var_samp: Maybe<artwork_comment_var_samp_fields>
  variance: Maybe<artwork_comment_variance_fields>
}

/** aggregate fields of "artwork_comment" */
export type artwork_comment_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<artwork_comment_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "artwork_comment" */
export type artwork_comment_aggregate_order_by = {
  avg?: InputMaybe<artwork_comment_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<artwork_comment_max_order_by>
  min?: InputMaybe<artwork_comment_min_order_by>
  stddev?: InputMaybe<artwork_comment_stddev_order_by>
  stddev_pop?: InputMaybe<artwork_comment_stddev_pop_order_by>
  stddev_samp?: InputMaybe<artwork_comment_stddev_samp_order_by>
  sum?: InputMaybe<artwork_comment_sum_order_by>
  var_pop?: InputMaybe<artwork_comment_var_pop_order_by>
  var_samp?: InputMaybe<artwork_comment_var_samp_order_by>
  variance?: InputMaybe<artwork_comment_variance_order_by>
}

/** input type for inserting array relation for remote table "artwork_comment" */
export type artwork_comment_arr_rel_insert_input = {
  data: Array<artwork_comment_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<artwork_comment_on_conflict>
}

/** aggregate avg on columns */
export type artwork_comment_avg_fields = {
  __typename: 'artwork_comment_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "artwork_comment" */
export type artwork_comment_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "artwork_comment". All fields are combined with a logical 'AND'. */
export type artwork_comment_bool_exp = {
  _and?: InputMaybe<Array<artwork_comment_bool_exp>>
  _not?: InputMaybe<artwork_comment_bool_exp>
  _or?: InputMaybe<Array<artwork_comment_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  content?: InputMaybe<String_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  id?: InputMaybe<Int_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<Int_comparison_exp>
  updated_at?: InputMaybe<timestamptz_comparison_exp>
}

/** unique or primary key constraints on table "artwork_comment" */
export enum artwork_comment_constraint {
  /** unique or primary key constraint */
  comment_id_key = 'comment_id_key',
  /** unique or primary key constraint */
  comment_pkey = 'comment_pkey',
}

/** input type for incrementing numeric columns in table "artwork_comment" */
export type artwork_comment_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['Int']>
  member_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "artwork_comment" */
export type artwork_comment_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  content?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type artwork_comment_max_fields = {
  __typename: 'artwork_comment_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  content: Maybe<Scalars['String']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['Int']>
  member_id: Maybe<Scalars['Int']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "artwork_comment" */
export type artwork_comment_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  content?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type artwork_comment_min_fields = {
  __typename: 'artwork_comment_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  content: Maybe<Scalars['String']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['Int']>
  member_id: Maybe<Scalars['Int']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "artwork_comment" */
export type artwork_comment_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  content?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
}

/** response of any mutation on the table "artwork_comment" */
export type artwork_comment_mutation_response = {
  __typename: 'artwork_comment_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<artwork_comment>
}

/** on conflict condition type for table "artwork_comment" */
export type artwork_comment_on_conflict = {
  constraint: artwork_comment_constraint
  update_columns?: Array<artwork_comment_update_column>
  where?: InputMaybe<artwork_comment_bool_exp>
}

/** Ordering options when selecting data from "artwork_comment". */
export type artwork_comment_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  content?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
}

/** primary key columns input for table: artwork_comment */
export type artwork_comment_pk_columns_input = {
  id: Scalars['Int']
}

/** select columns of table "artwork_comment" */
export enum artwork_comment_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "artwork_comment" */
export type artwork_comment_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  content?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  member_id?: InputMaybe<Scalars['Int']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type artwork_comment_stddev_fields = {
  __typename: 'artwork_comment_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "artwork_comment" */
export type artwork_comment_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type artwork_comment_stddev_pop_fields = {
  __typename: 'artwork_comment_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "artwork_comment" */
export type artwork_comment_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type artwork_comment_stddev_samp_fields = {
  __typename: 'artwork_comment_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "artwork_comment" */
export type artwork_comment_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type artwork_comment_sum_fields = {
  __typename: 'artwork_comment_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['Int']>
  member_id: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "artwork_comment" */
export type artwork_comment_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "artwork_comment" */
export enum artwork_comment_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
  /** column name */
  updated_at = 'updated_at',
}

/** aggregate var_pop on columns */
export type artwork_comment_var_pop_fields = {
  __typename: 'artwork_comment_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "artwork_comment" */
export type artwork_comment_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type artwork_comment_var_samp_fields = {
  __typename: 'artwork_comment_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "artwork_comment" */
export type artwork_comment_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type artwork_comment_variance_fields = {
  __typename: 'artwork_comment_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "artwork_comment" */
export type artwork_comment_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** unique or primary key constraints on table "artwork" */
export enum artwork_constraint {
  /** unique or primary key constraint */
  ArtWork_pkey = 'ArtWork_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type artwork_delete_at_path_input = {
  images?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type artwork_delete_elem_input = {
  images?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type artwork_delete_key_input = {
  images?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "artwork" */
export type artwork_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
  museum_id?: InputMaybe<Scalars['bigint']>
  years?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "artwork" */
export type artwork_insert_input = {
  comments?: InputMaybe<artwork_comment_arr_rel_insert_input>
  creator?: InputMaybe<creator_obj_rel_insert_input>
  creator_id?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  exhibition_artworks?: InputMaybe<exhibition_artwork_arr_rel_insert_input>
  favorites?: InputMaybe<favorite_arr_rel_insert_input>
  featured_image?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  images?: InputMaybe<Scalars['jsonb']>
  material?: InputMaybe<Scalars['String']>
  member_artwork_collections?: InputMaybe<member_artwork_collection_arr_rel_insert_input>
  museum?: InputMaybe<museum_obj_rel_insert_input>
  museum_id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
  playlist_items?: InputMaybe<playlist_item_arr_rel_insert_input>
  reviews?: InputMaybe<review_arr_rel_insert_input>
  size?: InputMaybe<Scalars['String']>
  speech?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  years?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type artwork_max_fields = {
  __typename: 'artwork_max_fields'
  creator_id: Maybe<Scalars['uuid']>
  description: Maybe<Scalars['String']>
  featured_image: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  material: Maybe<Scalars['String']>
  museum_id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
  size: Maybe<Scalars['String']>
  speech: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
  years: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "artwork" */
export type artwork_max_order_by = {
  creator_id?: InputMaybe<order_by>
  description?: InputMaybe<order_by>
  featured_image?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  material?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
  size?: InputMaybe<order_by>
  speech?: InputMaybe<order_by>
  type?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type artwork_min_fields = {
  __typename: 'artwork_min_fields'
  creator_id: Maybe<Scalars['uuid']>
  description: Maybe<Scalars['String']>
  featured_image: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  material: Maybe<Scalars['String']>
  museum_id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
  size: Maybe<Scalars['String']>
  speech: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
  years: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "artwork" */
export type artwork_min_order_by = {
  creator_id?: InputMaybe<order_by>
  description?: InputMaybe<order_by>
  featured_image?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  material?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
  size?: InputMaybe<order_by>
  speech?: InputMaybe<order_by>
  type?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** response of any mutation on the table "artwork" */
export type artwork_mutation_response = {
  __typename: 'artwork_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<artwork>
}

/** input type for inserting object relation for remote table "artwork" */
export type artwork_obj_rel_insert_input = {
  data: artwork_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<artwork_on_conflict>
}

/** on conflict condition type for table "artwork" */
export type artwork_on_conflict = {
  constraint: artwork_constraint
  update_columns?: Array<artwork_update_column>
  where?: InputMaybe<artwork_bool_exp>
}

/** Ordering options when selecting data from "artwork". */
export type artwork_order_by = {
  comments_aggregate?: InputMaybe<artwork_comment_aggregate_order_by>
  creator?: InputMaybe<creator_order_by>
  creator_id?: InputMaybe<order_by>
  description?: InputMaybe<order_by>
  exhibition_artworks_aggregate?: InputMaybe<exhibition_artwork_aggregate_order_by>
  favorites_aggregate?: InputMaybe<favorite_aggregate_order_by>
  featured_image?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  images?: InputMaybe<order_by>
  material?: InputMaybe<order_by>
  member_artwork_collections_aggregate?: InputMaybe<member_artwork_collection_aggregate_order_by>
  museum?: InputMaybe<museum_order_by>
  museum_id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
  playlist_items_aggregate?: InputMaybe<playlist_item_aggregate_order_by>
  reviews_aggregate?: InputMaybe<review_aggregate_order_by>
  size?: InputMaybe<order_by>
  speech?: InputMaybe<order_by>
  type?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** primary key columns input for table: artwork */
export type artwork_pk_columns_input = {
  id: Scalars['bigint']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type artwork_prepend_input = {
  images?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "artwork" */
export enum artwork_select_column {
  /** column name */
  creator_id = 'creator_id',
  /** column name */
  description = 'description',
  /** column name */
  featured_image = 'featured_image',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  material = 'material',
  /** column name */
  museum_id = 'museum_id',
  /** column name */
  name = 'name',
  /** column name */
  size = 'size',
  /** column name */
  speech = 'speech',
  /** column name */
  type = 'type',
  /** column name */
  years = 'years',
}

/** input type for updating data in table "artwork" */
export type artwork_set_input = {
  creator_id?: InputMaybe<Scalars['uuid']>
  description?: InputMaybe<Scalars['String']>
  featured_image?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  images?: InputMaybe<Scalars['jsonb']>
  material?: InputMaybe<Scalars['String']>
  museum_id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['String']>
  speech?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  years?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type artwork_stddev_fields = {
  __typename: 'artwork_stddev_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "artwork" */
export type artwork_stddev_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type artwork_stddev_pop_fields = {
  __typename: 'artwork_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "artwork" */
export type artwork_stddev_pop_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type artwork_stddev_samp_fields = {
  __typename: 'artwork_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "artwork" */
export type artwork_stddev_samp_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type artwork_sum_fields = {
  __typename: 'artwork_sum_fields'
  id: Maybe<Scalars['bigint']>
  museum_id: Maybe<Scalars['bigint']>
  years: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "artwork" */
export type artwork_sum_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** update columns of table "artwork" */
export enum artwork_update_column {
  /** column name */
  creator_id = 'creator_id',
  /** column name */
  description = 'description',
  /** column name */
  featured_image = 'featured_image',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  material = 'material',
  /** column name */
  museum_id = 'museum_id',
  /** column name */
  name = 'name',
  /** column name */
  size = 'size',
  /** column name */
  speech = 'speech',
  /** column name */
  type = 'type',
  /** column name */
  years = 'years',
}

/** aggregate var_pop on columns */
export type artwork_var_pop_fields = {
  __typename: 'artwork_var_pop_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "artwork" */
export type artwork_var_pop_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type artwork_var_samp_fields = {
  __typename: 'artwork_var_samp_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "artwork" */
export type artwork_var_samp_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type artwork_variance_fields = {
  __typename: 'artwork_variance_fields'
  id: Maybe<Scalars['Float']>
  museum_id: Maybe<Scalars['Float']>
  years: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "artwork" */
export type artwork_variance_order_by = {
  id?: InputMaybe<order_by>
  museum_id?: InputMaybe<order_by>
  years?: InputMaybe<order_by>
}

/** columns and relationships of "audio_book" */
export type audio_book = {
  __typename: 'audio_book'
  /** An array relationship */
  audio_book_categories: Array<audio_book_category>
  /** An aggregate relationship */
  audio_book_categories_aggregate: audio_book_category_aggregate
  /** An array relationship */
  audio_book_tags: Array<audio_book_tag>
  /** An aggregate relationship */
  audio_book_tags_aggregate: audio_book_tag_aggregate
  audio_url: Maybe<Scalars['String']>
  content: Maybe<Scalars['String']>
  created_at: Scalars['timestamptz']
  creator_name: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  duration: Maybe<Scalars['numeric']>
  featured_image_url: Maybe<Scalars['String']>
  id: Scalars['bigint']
  language: Maybe<Scalars['String']>
  /** An array relationship */
  member_audio_book_collections: Array<member_audio_book_collection>
  /** An aggregate relationship */
  member_audio_book_collections_aggregate: member_audio_book_collection_aggregate
  /** An array relationship */
  member_audio_book_favorites: Array<member_audio_book_favorite>
  /** An aggregate relationship */
  member_audio_book_favorites_aggregate: member_audio_book_favorite_aggregate
  title: Scalars['String']
  track_url: Maybe<Scalars['String']>
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "audio_book" */
export type audio_bookaudio_book_categoriesArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookaudio_book_categories_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookaudio_book_tagsArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookaudio_book_tags_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookmember_audio_book_collectionsArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookmember_audio_book_collections_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookmember_audio_book_favoritesArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

/** columns and relationships of "audio_book" */
export type audio_bookmember_audio_book_favorites_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

/** aggregated selection of "audio_book" */
export type audio_book_aggregate = {
  __typename: 'audio_book_aggregate'
  aggregate: Maybe<audio_book_aggregate_fields>
  nodes: Array<audio_book>
}

/** aggregate fields of "audio_book" */
export type audio_book_aggregate_fields = {
  __typename: 'audio_book_aggregate_fields'
  avg: Maybe<audio_book_avg_fields>
  count: Scalars['Int']
  max: Maybe<audio_book_max_fields>
  min: Maybe<audio_book_min_fields>
  stddev: Maybe<audio_book_stddev_fields>
  stddev_pop: Maybe<audio_book_stddev_pop_fields>
  stddev_samp: Maybe<audio_book_stddev_samp_fields>
  sum: Maybe<audio_book_sum_fields>
  var_pop: Maybe<audio_book_var_pop_fields>
  var_samp: Maybe<audio_book_var_samp_fields>
  variance: Maybe<audio_book_variance_fields>
}

/** aggregate fields of "audio_book" */
export type audio_book_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<audio_book_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type audio_book_avg_fields = {
  __typename: 'audio_book_avg_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "audio_book". All fields are combined with a logical 'AND'. */
export type audio_book_bool_exp = {
  _and?: InputMaybe<Array<audio_book_bool_exp>>
  _not?: InputMaybe<audio_book_bool_exp>
  _or?: InputMaybe<Array<audio_book_bool_exp>>
  audio_book_categories?: InputMaybe<audio_book_category_bool_exp>
  audio_book_tags?: InputMaybe<audio_book_tag_bool_exp>
  audio_url?: InputMaybe<String_comparison_exp>
  content?: InputMaybe<String_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  creator_name?: InputMaybe<String_comparison_exp>
  description?: InputMaybe<String_comparison_exp>
  duration?: InputMaybe<numeric_comparison_exp>
  featured_image_url?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  language?: InputMaybe<String_comparison_exp>
  member_audio_book_collections?: InputMaybe<member_audio_book_collection_bool_exp>
  member_audio_book_favorites?: InputMaybe<member_audio_book_favorite_bool_exp>
  title?: InputMaybe<String_comparison_exp>
  track_url?: InputMaybe<String_comparison_exp>
  updated_at?: InputMaybe<timestamptz_comparison_exp>
}

/** columns and relationships of "audio_book_category" */
export type audio_book_category = {
  __typename: 'audio_book_category'
  /** An object relationship */
  audio_book: audio_book
  audio_book_id: Scalars['bigint']
  /** An object relationship */
  category: category
  category_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
}

/** aggregated selection of "audio_book_category" */
export type audio_book_category_aggregate = {
  __typename: 'audio_book_category_aggregate'
  aggregate: Maybe<audio_book_category_aggregate_fields>
  nodes: Array<audio_book_category>
}

/** aggregate fields of "audio_book_category" */
export type audio_book_category_aggregate_fields = {
  __typename: 'audio_book_category_aggregate_fields'
  avg: Maybe<audio_book_category_avg_fields>
  count: Scalars['Int']
  max: Maybe<audio_book_category_max_fields>
  min: Maybe<audio_book_category_min_fields>
  stddev: Maybe<audio_book_category_stddev_fields>
  stddev_pop: Maybe<audio_book_category_stddev_pop_fields>
  stddev_samp: Maybe<audio_book_category_stddev_samp_fields>
  sum: Maybe<audio_book_category_sum_fields>
  var_pop: Maybe<audio_book_category_var_pop_fields>
  var_samp: Maybe<audio_book_category_var_samp_fields>
  variance: Maybe<audio_book_category_variance_fields>
}

/** aggregate fields of "audio_book_category" */
export type audio_book_category_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<audio_book_category_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "audio_book_category" */
export type audio_book_category_aggregate_order_by = {
  avg?: InputMaybe<audio_book_category_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<audio_book_category_max_order_by>
  min?: InputMaybe<audio_book_category_min_order_by>
  stddev?: InputMaybe<audio_book_category_stddev_order_by>
  stddev_pop?: InputMaybe<audio_book_category_stddev_pop_order_by>
  stddev_samp?: InputMaybe<audio_book_category_stddev_samp_order_by>
  sum?: InputMaybe<audio_book_category_sum_order_by>
  var_pop?: InputMaybe<audio_book_category_var_pop_order_by>
  var_samp?: InputMaybe<audio_book_category_var_samp_order_by>
  variance?: InputMaybe<audio_book_category_variance_order_by>
}

/** input type for inserting array relation for remote table "audio_book_category" */
export type audio_book_category_arr_rel_insert_input = {
  data: Array<audio_book_category_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<audio_book_category_on_conflict>
}

/** aggregate avg on columns */
export type audio_book_category_avg_fields = {
  __typename: 'audio_book_category_avg_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "audio_book_category" */
export type audio_book_category_avg_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "audio_book_category". All fields are combined with a logical 'AND'. */
export type audio_book_category_bool_exp = {
  _and?: InputMaybe<Array<audio_book_category_bool_exp>>
  _not?: InputMaybe<audio_book_category_bool_exp>
  _or?: InputMaybe<Array<audio_book_category_bool_exp>>
  audio_book?: InputMaybe<audio_book_bool_exp>
  audio_book_id?: InputMaybe<bigint_comparison_exp>
  category?: InputMaybe<category_bool_exp>
  category_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
}

/** unique or primary key constraints on table "audio_book_category" */
export enum audio_book_category_constraint {
  /** unique or primary key constraint */
  audio_book_category_pkey = 'audio_book_category_pkey',
}

/** input type for incrementing numeric columns in table "audio_book_category" */
export type audio_book_category_inc_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  category_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "audio_book_category" */
export type audio_book_category_insert_input = {
  audio_book?: InputMaybe<audio_book_obj_rel_insert_input>
  audio_book_id?: InputMaybe<Scalars['bigint']>
  category?: InputMaybe<category_obj_rel_insert_input>
  category_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type audio_book_category_max_fields = {
  __typename: 'audio_book_category_max_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  category_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "audio_book_category" */
export type audio_book_category_max_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type audio_book_category_min_fields = {
  __typename: 'audio_book_category_min_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  category_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "audio_book_category" */
export type audio_book_category_min_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
}

/** response of any mutation on the table "audio_book_category" */
export type audio_book_category_mutation_response = {
  __typename: 'audio_book_category_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<audio_book_category>
}

/** on conflict condition type for table "audio_book_category" */
export type audio_book_category_on_conflict = {
  constraint: audio_book_category_constraint
  update_columns?: Array<audio_book_category_update_column>
  where?: InputMaybe<audio_book_category_bool_exp>
}

/** Ordering options when selecting data from "audio_book_category". */
export type audio_book_category_order_by = {
  audio_book?: InputMaybe<audio_book_order_by>
  audio_book_id?: InputMaybe<order_by>
  category?: InputMaybe<category_order_by>
  category_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
}

/** primary key columns input for table: audio_book_category */
export type audio_book_category_pk_columns_input = {
  audio_book_id: Scalars['bigint']
  category_id: Scalars['bigint']
}

/** select columns of table "audio_book_category" */
export enum audio_book_category_select_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  category_id = 'category_id',
  /** column name */
  created_at = 'created_at',
}

/** input type for updating data in table "audio_book_category" */
export type audio_book_category_set_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  category_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type audio_book_category_stddev_fields = {
  __typename: 'audio_book_category_stddev_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "audio_book_category" */
export type audio_book_category_stddev_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type audio_book_category_stddev_pop_fields = {
  __typename: 'audio_book_category_stddev_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "audio_book_category" */
export type audio_book_category_stddev_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type audio_book_category_stddev_samp_fields = {
  __typename: 'audio_book_category_stddev_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "audio_book_category" */
export type audio_book_category_stddev_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type audio_book_category_sum_fields = {
  __typename: 'audio_book_category_sum_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  category_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "audio_book_category" */
export type audio_book_category_sum_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** update columns of table "audio_book_category" */
export enum audio_book_category_update_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  category_id = 'category_id',
  /** column name */
  created_at = 'created_at',
}

/** aggregate var_pop on columns */
export type audio_book_category_var_pop_fields = {
  __typename: 'audio_book_category_var_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "audio_book_category" */
export type audio_book_category_var_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type audio_book_category_var_samp_fields = {
  __typename: 'audio_book_category_var_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "audio_book_category" */
export type audio_book_category_var_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type audio_book_category_variance_fields = {
  __typename: 'audio_book_category_variance_fields'
  audio_book_id: Maybe<Scalars['Float']>
  category_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "audio_book_category" */
export type audio_book_category_variance_order_by = {
  audio_book_id?: InputMaybe<order_by>
  category_id?: InputMaybe<order_by>
}

/** unique or primary key constraints on table "audio_book" */
export enum audio_book_constraint {
  /** unique or primary key constraint */
  audio_book_pkey = 'audio_book_pkey',
}

/** input type for incrementing numeric columns in table "audio_book" */
export type audio_book_inc_input = {
  duration?: InputMaybe<Scalars['numeric']>
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "audio_book" */
export type audio_book_insert_input = {
  audio_book_categories?: InputMaybe<audio_book_category_arr_rel_insert_input>
  audio_book_tags?: InputMaybe<audio_book_tag_arr_rel_insert_input>
  audio_url?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  creator_name?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['numeric']>
  featured_image_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  member_audio_book_collections?: InputMaybe<member_audio_book_collection_arr_rel_insert_input>
  member_audio_book_favorites?: InputMaybe<member_audio_book_favorite_arr_rel_insert_input>
  title?: InputMaybe<Scalars['String']>
  track_url?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type audio_book_max_fields = {
  __typename: 'audio_book_max_fields'
  audio_url: Maybe<Scalars['String']>
  content: Maybe<Scalars['String']>
  created_at: Maybe<Scalars['timestamptz']>
  creator_name: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  duration: Maybe<Scalars['numeric']>
  featured_image_url: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  track_url: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type audio_book_min_fields = {
  __typename: 'audio_book_min_fields'
  audio_url: Maybe<Scalars['String']>
  content: Maybe<Scalars['String']>
  created_at: Maybe<Scalars['timestamptz']>
  creator_name: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  duration: Maybe<Scalars['numeric']>
  featured_image_url: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  track_url: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "audio_book" */
export type audio_book_mutation_response = {
  __typename: 'audio_book_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<audio_book>
}

/** input type for inserting object relation for remote table "audio_book" */
export type audio_book_obj_rel_insert_input = {
  data: audio_book_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<audio_book_on_conflict>
}

/** on conflict condition type for table "audio_book" */
export type audio_book_on_conflict = {
  constraint: audio_book_constraint
  update_columns?: Array<audio_book_update_column>
  where?: InputMaybe<audio_book_bool_exp>
}

/** Ordering options when selecting data from "audio_book". */
export type audio_book_order_by = {
  audio_book_categories_aggregate?: InputMaybe<audio_book_category_aggregate_order_by>
  audio_book_tags_aggregate?: InputMaybe<audio_book_tag_aggregate_order_by>
  audio_url?: InputMaybe<order_by>
  content?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  creator_name?: InputMaybe<order_by>
  description?: InputMaybe<order_by>
  duration?: InputMaybe<order_by>
  featured_image_url?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  language?: InputMaybe<order_by>
  member_audio_book_collections_aggregate?: InputMaybe<member_audio_book_collection_aggregate_order_by>
  member_audio_book_favorites_aggregate?: InputMaybe<member_audio_book_favorite_aggregate_order_by>
  title?: InputMaybe<order_by>
  track_url?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
}

/** primary key columns input for table: audio_book */
export type audio_book_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "audio_book" */
export enum audio_book_select_column {
  /** column name */
  audio_url = 'audio_url',
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  creator_name = 'creator_name',
  /** column name */
  description = 'description',
  /** column name */
  duration = 'duration',
  /** column name */
  featured_image_url = 'featured_image_url',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  title = 'title',
  /** column name */
  track_url = 'track_url',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "audio_book" */
export type audio_book_set_input = {
  audio_url?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  creator_name?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['numeric']>
  featured_image_url?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  track_url?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type audio_book_stddev_fields = {
  __typename: 'audio_book_stddev_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type audio_book_stddev_pop_fields = {
  __typename: 'audio_book_stddev_pop_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type audio_book_stddev_samp_fields = {
  __typename: 'audio_book_stddev_samp_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type audio_book_sum_fields = {
  __typename: 'audio_book_sum_fields'
  duration: Maybe<Scalars['numeric']>
  id: Maybe<Scalars['bigint']>
}

/** columns and relationships of "audio_book_tag" */
export type audio_book_tag = {
  __typename: 'audio_book_tag'
  /** An object relationship */
  audio_book: audio_book
  audio_book_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  /** An object relationship */
  tag: tag
  tag_id: Scalars['bigint']
}

/** aggregated selection of "audio_book_tag" */
export type audio_book_tag_aggregate = {
  __typename: 'audio_book_tag_aggregate'
  aggregate: Maybe<audio_book_tag_aggregate_fields>
  nodes: Array<audio_book_tag>
}

/** aggregate fields of "audio_book_tag" */
export type audio_book_tag_aggregate_fields = {
  __typename: 'audio_book_tag_aggregate_fields'
  avg: Maybe<audio_book_tag_avg_fields>
  count: Scalars['Int']
  max: Maybe<audio_book_tag_max_fields>
  min: Maybe<audio_book_tag_min_fields>
  stddev: Maybe<audio_book_tag_stddev_fields>
  stddev_pop: Maybe<audio_book_tag_stddev_pop_fields>
  stddev_samp: Maybe<audio_book_tag_stddev_samp_fields>
  sum: Maybe<audio_book_tag_sum_fields>
  var_pop: Maybe<audio_book_tag_var_pop_fields>
  var_samp: Maybe<audio_book_tag_var_samp_fields>
  variance: Maybe<audio_book_tag_variance_fields>
}

/** aggregate fields of "audio_book_tag" */
export type audio_book_tag_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<audio_book_tag_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "audio_book_tag" */
export type audio_book_tag_aggregate_order_by = {
  avg?: InputMaybe<audio_book_tag_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<audio_book_tag_max_order_by>
  min?: InputMaybe<audio_book_tag_min_order_by>
  stddev?: InputMaybe<audio_book_tag_stddev_order_by>
  stddev_pop?: InputMaybe<audio_book_tag_stddev_pop_order_by>
  stddev_samp?: InputMaybe<audio_book_tag_stddev_samp_order_by>
  sum?: InputMaybe<audio_book_tag_sum_order_by>
  var_pop?: InputMaybe<audio_book_tag_var_pop_order_by>
  var_samp?: InputMaybe<audio_book_tag_var_samp_order_by>
  variance?: InputMaybe<audio_book_tag_variance_order_by>
}

/** input type for inserting array relation for remote table "audio_book_tag" */
export type audio_book_tag_arr_rel_insert_input = {
  data: Array<audio_book_tag_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<audio_book_tag_on_conflict>
}

/** aggregate avg on columns */
export type audio_book_tag_avg_fields = {
  __typename: 'audio_book_tag_avg_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "audio_book_tag" */
export type audio_book_tag_avg_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "audio_book_tag". All fields are combined with a logical 'AND'. */
export type audio_book_tag_bool_exp = {
  _and?: InputMaybe<Array<audio_book_tag_bool_exp>>
  _not?: InputMaybe<audio_book_tag_bool_exp>
  _or?: InputMaybe<Array<audio_book_tag_bool_exp>>
  audio_book?: InputMaybe<audio_book_bool_exp>
  audio_book_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  tag?: InputMaybe<tag_bool_exp>
  tag_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "audio_book_tag" */
export enum audio_book_tag_constraint {
  /** unique or primary key constraint */
  audio_book_tag_pkey = 'audio_book_tag_pkey',
}

/** input type for incrementing numeric columns in table "audio_book_tag" */
export type audio_book_tag_inc_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  tag_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "audio_book_tag" */
export type audio_book_tag_insert_input = {
  audio_book?: InputMaybe<audio_book_obj_rel_insert_input>
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  tag?: InputMaybe<tag_obj_rel_insert_input>
  tag_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type audio_book_tag_max_fields = {
  __typename: 'audio_book_tag_max_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  tag_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "audio_book_tag" */
export type audio_book_tag_max_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type audio_book_tag_min_fields = {
  __typename: 'audio_book_tag_min_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  tag_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "audio_book_tag" */
export type audio_book_tag_min_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "audio_book_tag" */
export type audio_book_tag_mutation_response = {
  __typename: 'audio_book_tag_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<audio_book_tag>
}

/** on conflict condition type for table "audio_book_tag" */
export type audio_book_tag_on_conflict = {
  constraint: audio_book_tag_constraint
  update_columns?: Array<audio_book_tag_update_column>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

/** Ordering options when selecting data from "audio_book_tag". */
export type audio_book_tag_order_by = {
  audio_book?: InputMaybe<audio_book_order_by>
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  tag?: InputMaybe<tag_order_by>
  tag_id?: InputMaybe<order_by>
}

/** primary key columns input for table: audio_book_tag */
export type audio_book_tag_pk_columns_input = {
  audio_book_id: Scalars['bigint']
  tag_id: Scalars['bigint']
}

/** select columns of table "audio_book_tag" */
export enum audio_book_tag_select_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  tag_id = 'tag_id',
}

/** input type for updating data in table "audio_book_tag" */
export type audio_book_tag_set_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  tag_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type audio_book_tag_stddev_fields = {
  __typename: 'audio_book_tag_stddev_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "audio_book_tag" */
export type audio_book_tag_stddev_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type audio_book_tag_stddev_pop_fields = {
  __typename: 'audio_book_tag_stddev_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "audio_book_tag" */
export type audio_book_tag_stddev_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type audio_book_tag_stddev_samp_fields = {
  __typename: 'audio_book_tag_stddev_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "audio_book_tag" */
export type audio_book_tag_stddev_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type audio_book_tag_sum_fields = {
  __typename: 'audio_book_tag_sum_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  tag_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "audio_book_tag" */
export type audio_book_tag_sum_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** update columns of table "audio_book_tag" */
export enum audio_book_tag_update_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  tag_id = 'tag_id',
}

/** aggregate var_pop on columns */
export type audio_book_tag_var_pop_fields = {
  __typename: 'audio_book_tag_var_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "audio_book_tag" */
export type audio_book_tag_var_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type audio_book_tag_var_samp_fields = {
  __typename: 'audio_book_tag_var_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "audio_book_tag" */
export type audio_book_tag_var_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type audio_book_tag_variance_fields = {
  __typename: 'audio_book_tag_variance_fields'
  audio_book_id: Maybe<Scalars['Float']>
  tag_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "audio_book_tag" */
export type audio_book_tag_variance_order_by = {
  audio_book_id?: InputMaybe<order_by>
  tag_id?: InputMaybe<order_by>
}

/** update columns of table "audio_book" */
export enum audio_book_update_column {
  /** column name */
  audio_url = 'audio_url',
  /** column name */
  content = 'content',
  /** column name */
  created_at = 'created_at',
  /** column name */
  creator_name = 'creator_name',
  /** column name */
  description = 'description',
  /** column name */
  duration = 'duration',
  /** column name */
  featured_image_url = 'featured_image_url',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  title = 'title',
  /** column name */
  track_url = 'track_url',
  /** column name */
  updated_at = 'updated_at',
}

/** aggregate var_pop on columns */
export type audio_book_var_pop_fields = {
  __typename: 'audio_book_var_pop_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type audio_book_var_samp_fields = {
  __typename: 'audio_book_var_samp_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type audio_book_variance_fields = {
  __typename: 'audio_book_variance_fields'
  duration: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type bigint_comparison_exp = {
  _eq?: InputMaybe<Scalars['bigint']>
  _gt?: InputMaybe<Scalars['bigint']>
  _gte?: InputMaybe<Scalars['bigint']>
  _in?: InputMaybe<Array<Scalars['bigint']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['bigint']>
  _lte?: InputMaybe<Scalars['bigint']>
  _neq?: InputMaybe<Scalars['bigint']>
  _nin?: InputMaybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "category" */
export type category = {
  __typename: 'category'
  /** An array relationship */
  audio_book_categories: Array<audio_book_category>
  /** An aggregate relationship */
  audio_book_categories_aggregate: audio_book_category_aggregate
  created_at: Scalars['timestamptz']
  description: Maybe<Scalars['String']>
  id: Scalars['bigint']
  language: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "category" */
export type categoryaudio_book_categoriesArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

/** columns and relationships of "category" */
export type categoryaudio_book_categories_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

/** aggregated selection of "category" */
export type category_aggregate = {
  __typename: 'category_aggregate'
  aggregate: Maybe<category_aggregate_fields>
  nodes: Array<category>
}

/** aggregate fields of "category" */
export type category_aggregate_fields = {
  __typename: 'category_aggregate_fields'
  avg: Maybe<category_avg_fields>
  count: Scalars['Int']
  max: Maybe<category_max_fields>
  min: Maybe<category_min_fields>
  stddev: Maybe<category_stddev_fields>
  stddev_pop: Maybe<category_stddev_pop_fields>
  stddev_samp: Maybe<category_stddev_samp_fields>
  sum: Maybe<category_sum_fields>
  var_pop: Maybe<category_var_pop_fields>
  var_samp: Maybe<category_var_samp_fields>
  variance: Maybe<category_variance_fields>
}

/** aggregate fields of "category" */
export type category_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<category_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type category_avg_fields = {
  __typename: 'category_avg_fields'
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type category_bool_exp = {
  _and?: InputMaybe<Array<category_bool_exp>>
  _not?: InputMaybe<category_bool_exp>
  _or?: InputMaybe<Array<category_bool_exp>>
  audio_book_categories?: InputMaybe<audio_book_category_bool_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  description?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  language?: InputMaybe<String_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
  type?: InputMaybe<String_comparison_exp>
  updated_at?: InputMaybe<timestamptz_comparison_exp>
}

/** unique or primary key constraints on table "category" */
export enum category_constraint {
  /** unique or primary key constraint */
  category_id_language_type_key = 'category_id_language_type_key',
  /** unique or primary key constraint */
  category_pkey = 'category_pkey',
}

/** input type for incrementing numeric columns in table "category" */
export type category_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "category" */
export type category_insert_input = {
  audio_book_categories?: InputMaybe<audio_book_category_arr_rel_insert_input>
  created_at?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type category_max_fields = {
  __typename: 'category_max_fields'
  created_at: Maybe<Scalars['timestamptz']>
  description: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type category_min_fields = {
  __typename: 'category_min_fields'
  created_at: Maybe<Scalars['timestamptz']>
  description: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "category" */
export type category_mutation_response = {
  __typename: 'category_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<category>
}

/** input type for inserting object relation for remote table "category" */
export type category_obj_rel_insert_input = {
  data: category_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<category_on_conflict>
}

/** on conflict condition type for table "category" */
export type category_on_conflict = {
  constraint: category_constraint
  update_columns?: Array<category_update_column>
  where?: InputMaybe<category_bool_exp>
}

/** Ordering options when selecting data from "category". */
export type category_order_by = {
  audio_book_categories_aggregate?: InputMaybe<audio_book_category_aggregate_order_by>
  created_at?: InputMaybe<order_by>
  description?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  language?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
  type?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
}

/** primary key columns input for table: category */
export type category_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "category" */
export enum category_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  name = 'name',
  /** column name */
  type = 'type',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "category" */
export type category_set_input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type category_stddev_fields = {
  __typename: 'category_stddev_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type category_stddev_pop_fields = {
  __typename: 'category_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type category_stddev_samp_fields = {
  __typename: 'category_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type category_sum_fields = {
  __typename: 'category_sum_fields'
  id: Maybe<Scalars['bigint']>
}

/** update columns of table "category" */
export enum category_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  name = 'name',
  /** column name */
  type = 'type',
  /** column name */
  updated_at = 'updated_at',
}

/** aggregate var_pop on columns */
export type category_var_pop_fields = {
  __typename: 'category_var_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type category_var_samp_fields = {
  __typename: 'category_var_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type category_variance_fields = {
  __typename: 'category_variance_fields'
  id: Maybe<Scalars['Float']>
}

/** columns and relationships of "creator" */
export type creator = {
  __typename: 'creator'
  /** An array relationship */
  artworks: Array<artwork>
  /** An aggregate relationship */
  artworks_aggregate: artwork_aggregate
  avatarUrl: Maybe<Scalars['String']>
  id: Scalars['uuid']
  name: Scalars['String']
}

/** columns and relationships of "creator" */
export type creatorartworksArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

/** columns and relationships of "creator" */
export type creatorartworks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

/** aggregated selection of "creator" */
export type creator_aggregate = {
  __typename: 'creator_aggregate'
  aggregate: Maybe<creator_aggregate_fields>
  nodes: Array<creator>
}

/** aggregate fields of "creator" */
export type creator_aggregate_fields = {
  __typename: 'creator_aggregate_fields'
  count: Scalars['Int']
  max: Maybe<creator_max_fields>
  min: Maybe<creator_min_fields>
}

/** aggregate fields of "creator" */
export type creator_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<creator_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "creator". All fields are combined with a logical 'AND'. */
export type creator_bool_exp = {
  _and?: InputMaybe<Array<creator_bool_exp>>
  _not?: InputMaybe<creator_bool_exp>
  _or?: InputMaybe<Array<creator_bool_exp>>
  artworks?: InputMaybe<artwork_bool_exp>
  avatarUrl?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<uuid_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
}

/** unique or primary key constraints on table "creator" */
export enum creator_constraint {
  /** unique or primary key constraint */
  creator_pkey = 'creator_pkey',
}

/** input type for inserting data into table "creator" */
export type creator_insert_input = {
  artworks?: InputMaybe<artwork_arr_rel_insert_input>
  avatarUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type creator_max_fields = {
  __typename: 'creator_max_fields'
  avatarUrl: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  name: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type creator_min_fields = {
  __typename: 'creator_min_fields'
  avatarUrl: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  name: Maybe<Scalars['String']>
}

/** response of any mutation on the table "creator" */
export type creator_mutation_response = {
  __typename: 'creator_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<creator>
}

/** input type for inserting object relation for remote table "creator" */
export type creator_obj_rel_insert_input = {
  data: creator_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<creator_on_conflict>
}

/** on conflict condition type for table "creator" */
export type creator_on_conflict = {
  constraint: creator_constraint
  update_columns?: Array<creator_update_column>
  where?: InputMaybe<creator_bool_exp>
}

/** Ordering options when selecting data from "creator". */
export type creator_order_by = {
  artworks_aggregate?: InputMaybe<artwork_aggregate_order_by>
  avatarUrl?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
}

/** primary key columns input for table: creator */
export type creator_pk_columns_input = {
  id: Scalars['uuid']
}

/** select columns of table "creator" */
export enum creator_select_column {
  /** column name */
  avatarUrl = 'avatarUrl',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "creator" */
export type creator_set_input = {
  avatarUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
}

/** update columns of table "creator" */
export enum creator_update_column {
  /** column name */
  avatarUrl = 'avatarUrl',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** columns and relationships of "exhibition" */
export type exhibition = {
  __typename: 'exhibition'
  created_at: Scalars['timestamptz']
  /** An array relationship */
  exhibition_artworks: Array<exhibition_artwork>
  /** An aggregate relationship */
  exhibition_artworks_aggregate: exhibition_artwork_aggregate
  featured_image: Maybe<Scalars['String']>
  id: Scalars['bigint']
  name: Scalars['String']
}

/** columns and relationships of "exhibition" */
export type exhibitionexhibition_artworksArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

/** columns and relationships of "exhibition" */
export type exhibitionexhibition_artworks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

/** aggregated selection of "exhibition" */
export type exhibition_aggregate = {
  __typename: 'exhibition_aggregate'
  aggregate: Maybe<exhibition_aggregate_fields>
  nodes: Array<exhibition>
}

/** aggregate fields of "exhibition" */
export type exhibition_aggregate_fields = {
  __typename: 'exhibition_aggregate_fields'
  avg: Maybe<exhibition_avg_fields>
  count: Scalars['Int']
  max: Maybe<exhibition_max_fields>
  min: Maybe<exhibition_min_fields>
  stddev: Maybe<exhibition_stddev_fields>
  stddev_pop: Maybe<exhibition_stddev_pop_fields>
  stddev_samp: Maybe<exhibition_stddev_samp_fields>
  sum: Maybe<exhibition_sum_fields>
  var_pop: Maybe<exhibition_var_pop_fields>
  var_samp: Maybe<exhibition_var_samp_fields>
  variance: Maybe<exhibition_variance_fields>
}

/** aggregate fields of "exhibition" */
export type exhibition_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<exhibition_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "exhibition_artwork" */
export type exhibition_artwork = {
  __typename: 'exhibition_artwork'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  /** An object relationship */
  exhibition: exhibition
  exhibition_id: Scalars['bigint']
  id: Scalars['bigint']
}

/** aggregated selection of "exhibition_artwork" */
export type exhibition_artwork_aggregate = {
  __typename: 'exhibition_artwork_aggregate'
  aggregate: Maybe<exhibition_artwork_aggregate_fields>
  nodes: Array<exhibition_artwork>
}

/** aggregate fields of "exhibition_artwork" */
export type exhibition_artwork_aggregate_fields = {
  __typename: 'exhibition_artwork_aggregate_fields'
  avg: Maybe<exhibition_artwork_avg_fields>
  count: Scalars['Int']
  max: Maybe<exhibition_artwork_max_fields>
  min: Maybe<exhibition_artwork_min_fields>
  stddev: Maybe<exhibition_artwork_stddev_fields>
  stddev_pop: Maybe<exhibition_artwork_stddev_pop_fields>
  stddev_samp: Maybe<exhibition_artwork_stddev_samp_fields>
  sum: Maybe<exhibition_artwork_sum_fields>
  var_pop: Maybe<exhibition_artwork_var_pop_fields>
  var_samp: Maybe<exhibition_artwork_var_samp_fields>
  variance: Maybe<exhibition_artwork_variance_fields>
}

/** aggregate fields of "exhibition_artwork" */
export type exhibition_artwork_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<exhibition_artwork_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "exhibition_artwork" */
export type exhibition_artwork_aggregate_order_by = {
  avg?: InputMaybe<exhibition_artwork_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<exhibition_artwork_max_order_by>
  min?: InputMaybe<exhibition_artwork_min_order_by>
  stddev?: InputMaybe<exhibition_artwork_stddev_order_by>
  stddev_pop?: InputMaybe<exhibition_artwork_stddev_pop_order_by>
  stddev_samp?: InputMaybe<exhibition_artwork_stddev_samp_order_by>
  sum?: InputMaybe<exhibition_artwork_sum_order_by>
  var_pop?: InputMaybe<exhibition_artwork_var_pop_order_by>
  var_samp?: InputMaybe<exhibition_artwork_var_samp_order_by>
  variance?: InputMaybe<exhibition_artwork_variance_order_by>
}

/** input type for inserting array relation for remote table "exhibition_artwork" */
export type exhibition_artwork_arr_rel_insert_input = {
  data: Array<exhibition_artwork_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<exhibition_artwork_on_conflict>
}

/** aggregate avg on columns */
export type exhibition_artwork_avg_fields = {
  __typename: 'exhibition_artwork_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "exhibition_artwork" */
export type exhibition_artwork_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "exhibition_artwork". All fields are combined with a logical 'AND'. */
export type exhibition_artwork_bool_exp = {
  _and?: InputMaybe<Array<exhibition_artwork_bool_exp>>
  _not?: InputMaybe<exhibition_artwork_bool_exp>
  _or?: InputMaybe<Array<exhibition_artwork_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  exhibition?: InputMaybe<exhibition_bool_exp>
  exhibition_id?: InputMaybe<bigint_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "exhibition_artwork" */
export enum exhibition_artwork_constraint {
  /** unique or primary key constraint */
  exhibition_artwork_pkey = 'exhibition_artwork_pkey',
}

/** input type for incrementing numeric columns in table "exhibition_artwork" */
export type exhibition_artwork_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  exhibition_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "exhibition_artwork" */
export type exhibition_artwork_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  exhibition?: InputMaybe<exhibition_obj_rel_insert_input>
  exhibition_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type exhibition_artwork_max_fields = {
  __typename: 'exhibition_artwork_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  exhibition_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "exhibition_artwork" */
export type exhibition_artwork_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type exhibition_artwork_min_fields = {
  __typename: 'exhibition_artwork_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  exhibition_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "exhibition_artwork" */
export type exhibition_artwork_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** response of any mutation on the table "exhibition_artwork" */
export type exhibition_artwork_mutation_response = {
  __typename: 'exhibition_artwork_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<exhibition_artwork>
}

/** on conflict condition type for table "exhibition_artwork" */
export type exhibition_artwork_on_conflict = {
  constraint: exhibition_artwork_constraint
  update_columns?: Array<exhibition_artwork_update_column>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

/** Ordering options when selecting data from "exhibition_artwork". */
export type exhibition_artwork_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  exhibition?: InputMaybe<exhibition_order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** primary key columns input for table: exhibition_artwork */
export type exhibition_artwork_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "exhibition_artwork" */
export enum exhibition_artwork_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  exhibition_id = 'exhibition_id',
  /** column name */
  id = 'id',
}

/** input type for updating data in table "exhibition_artwork" */
export type exhibition_artwork_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  exhibition_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type exhibition_artwork_stddev_fields = {
  __typename: 'exhibition_artwork_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "exhibition_artwork" */
export type exhibition_artwork_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type exhibition_artwork_stddev_pop_fields = {
  __typename: 'exhibition_artwork_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "exhibition_artwork" */
export type exhibition_artwork_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type exhibition_artwork_stddev_samp_fields = {
  __typename: 'exhibition_artwork_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "exhibition_artwork" */
export type exhibition_artwork_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type exhibition_artwork_sum_fields = {
  __typename: 'exhibition_artwork_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  exhibition_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "exhibition_artwork" */
export type exhibition_artwork_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** update columns of table "exhibition_artwork" */
export enum exhibition_artwork_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  exhibition_id = 'exhibition_id',
  /** column name */
  id = 'id',
}

/** aggregate var_pop on columns */
export type exhibition_artwork_var_pop_fields = {
  __typename: 'exhibition_artwork_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "exhibition_artwork" */
export type exhibition_artwork_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type exhibition_artwork_var_samp_fields = {
  __typename: 'exhibition_artwork_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "exhibition_artwork" */
export type exhibition_artwork_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type exhibition_artwork_variance_fields = {
  __typename: 'exhibition_artwork_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  exhibition_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "exhibition_artwork" */
export type exhibition_artwork_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  exhibition_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
}

/** aggregate avg on columns */
export type exhibition_avg_fields = {
  __typename: 'exhibition_avg_fields'
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "exhibition". All fields are combined with a logical 'AND'. */
export type exhibition_bool_exp = {
  _and?: InputMaybe<Array<exhibition_bool_exp>>
  _not?: InputMaybe<exhibition_bool_exp>
  _or?: InputMaybe<Array<exhibition_bool_exp>>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  exhibition_artworks?: InputMaybe<exhibition_artwork_bool_exp>
  featured_image?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
}

/** unique or primary key constraints on table "exhibition" */
export enum exhibition_constraint {
  /** unique or primary key constraint */
  exhibition_pkey = 'exhibition_pkey',
}

/** input type for incrementing numeric columns in table "exhibition" */
export type exhibition_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "exhibition" */
export type exhibition_insert_input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  exhibition_artworks?: InputMaybe<exhibition_artwork_arr_rel_insert_input>
  featured_image?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type exhibition_max_fields = {
  __typename: 'exhibition_max_fields'
  created_at: Maybe<Scalars['timestamptz']>
  featured_image: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type exhibition_min_fields = {
  __typename: 'exhibition_min_fields'
  created_at: Maybe<Scalars['timestamptz']>
  featured_image: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
}

/** response of any mutation on the table "exhibition" */
export type exhibition_mutation_response = {
  __typename: 'exhibition_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<exhibition>
}

/** input type for inserting object relation for remote table "exhibition" */
export type exhibition_obj_rel_insert_input = {
  data: exhibition_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<exhibition_on_conflict>
}

/** on conflict condition type for table "exhibition" */
export type exhibition_on_conflict = {
  constraint: exhibition_constraint
  update_columns?: Array<exhibition_update_column>
  where?: InputMaybe<exhibition_bool_exp>
}

/** Ordering options when selecting data from "exhibition". */
export type exhibition_order_by = {
  created_at?: InputMaybe<order_by>
  exhibition_artworks_aggregate?: InputMaybe<exhibition_artwork_aggregate_order_by>
  featured_image?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
}

/** primary key columns input for table: exhibition */
export type exhibition_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "exhibition" */
export enum exhibition_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  featured_image = 'featured_image',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "exhibition" */
export type exhibition_set_input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  featured_image?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type exhibition_stddev_fields = {
  __typename: 'exhibition_stddev_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type exhibition_stddev_pop_fields = {
  __typename: 'exhibition_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type exhibition_stddev_samp_fields = {
  __typename: 'exhibition_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type exhibition_sum_fields = {
  __typename: 'exhibition_sum_fields'
  id: Maybe<Scalars['bigint']>
}

/** update columns of table "exhibition" */
export enum exhibition_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  featured_image = 'featured_image',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** aggregate var_pop on columns */
export type exhibition_var_pop_fields = {
  __typename: 'exhibition_var_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type exhibition_var_samp_fields = {
  __typename: 'exhibition_var_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type exhibition_variance_fields = {
  __typename: 'exhibition_variance_fields'
  id: Maybe<Scalars['Float']>
}

/** columns and relationships of "favorite" */
export type favorite = {
  __typename: 'favorite'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  id: Scalars['bigint']
  /** An object relationship */
  member: member
  member_id: Scalars['bigint']
}

/** aggregated selection of "favorite" */
export type favorite_aggregate = {
  __typename: 'favorite_aggregate'
  aggregate: Maybe<favorite_aggregate_fields>
  nodes: Array<favorite>
}

/** aggregate fields of "favorite" */
export type favorite_aggregate_fields = {
  __typename: 'favorite_aggregate_fields'
  avg: Maybe<favorite_avg_fields>
  count: Scalars['Int']
  max: Maybe<favorite_max_fields>
  min: Maybe<favorite_min_fields>
  stddev: Maybe<favorite_stddev_fields>
  stddev_pop: Maybe<favorite_stddev_pop_fields>
  stddev_samp: Maybe<favorite_stddev_samp_fields>
  sum: Maybe<favorite_sum_fields>
  var_pop: Maybe<favorite_var_pop_fields>
  var_samp: Maybe<favorite_var_samp_fields>
  variance: Maybe<favorite_variance_fields>
}

/** aggregate fields of "favorite" */
export type favorite_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<favorite_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "favorite" */
export type favorite_aggregate_order_by = {
  avg?: InputMaybe<favorite_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<favorite_max_order_by>
  min?: InputMaybe<favorite_min_order_by>
  stddev?: InputMaybe<favorite_stddev_order_by>
  stddev_pop?: InputMaybe<favorite_stddev_pop_order_by>
  stddev_samp?: InputMaybe<favorite_stddev_samp_order_by>
  sum?: InputMaybe<favorite_sum_order_by>
  var_pop?: InputMaybe<favorite_var_pop_order_by>
  var_samp?: InputMaybe<favorite_var_samp_order_by>
  variance?: InputMaybe<favorite_variance_order_by>
}

/** input type for inserting array relation for remote table "favorite" */
export type favorite_arr_rel_insert_input = {
  data: Array<favorite_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<favorite_on_conflict>
}

/** aggregate avg on columns */
export type favorite_avg_fields = {
  __typename: 'favorite_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "favorite" */
export type favorite_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "favorite". All fields are combined with a logical 'AND'. */
export type favorite_bool_exp = {
  _and?: InputMaybe<Array<favorite_bool_exp>>
  _not?: InputMaybe<favorite_bool_exp>
  _or?: InputMaybe<Array<favorite_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "favorite" */
export enum favorite_constraint {
  /** unique or primary key constraint */
  favorite_pkey = 'favorite_pkey',
}

/** input type for incrementing numeric columns in table "favorite" */
export type favorite_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "favorite" */
export type favorite_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type favorite_max_fields = {
  __typename: 'favorite_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "favorite" */
export type favorite_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type favorite_min_fields = {
  __typename: 'favorite_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "favorite" */
export type favorite_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "favorite" */
export type favorite_mutation_response = {
  __typename: 'favorite_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<favorite>
}

/** on conflict condition type for table "favorite" */
export type favorite_on_conflict = {
  constraint: favorite_constraint
  update_columns?: Array<favorite_update_column>
  where?: InputMaybe<favorite_bool_exp>
}

/** Ordering options when selecting data from "favorite". */
export type favorite_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
}

/** primary key columns input for table: favorite */
export type favorite_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "favorite" */
export enum favorite_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "favorite" */
export type favorite_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type favorite_stddev_fields = {
  __typename: 'favorite_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "favorite" */
export type favorite_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type favorite_stddev_pop_fields = {
  __typename: 'favorite_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "favorite" */
export type favorite_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type favorite_stddev_samp_fields = {
  __typename: 'favorite_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "favorite" */
export type favorite_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type favorite_sum_fields = {
  __typename: 'favorite_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "favorite" */
export type favorite_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "favorite" */
export enum favorite_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type favorite_var_pop_fields = {
  __typename: 'favorite_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "favorite" */
export type favorite_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type favorite_var_samp_fields = {
  __typename: 'favorite_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "favorite" */
export type favorite_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type favorite_variance_fields = {
  __typename: 'favorite_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "favorite" */
export type favorite_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "member" */
export type member = {
  __typename: 'member'
  avatar_url: Maybe<Scalars['String']>
  category: Maybe<Scalars['Int']>
  /** An array relationship */
  comments: Array<artwork_comment>
  /** An aggregate relationship */
  comments_aggregate: artwork_comment_aggregate
  created_at: Maybe<Scalars['timestamptz']>
  email: Scalars['String']
  /** An array relationship */
  favorites: Array<favorite>
  /** An aggregate relationship */
  favorites_aggregate: favorite_aggregate
  id: Scalars['bigint']
  login_at: Maybe<Scalars['timestamptz']>
  /** An array relationship */
  member_artwork_collections: Array<member_artwork_collection>
  /** An aggregate relationship */
  member_artwork_collections_aggregate: member_artwork_collection_aggregate
  /** An array relationship */
  member_audio_book_collections: Array<member_audio_book_collection>
  /** An aggregate relationship */
  member_audio_book_collections_aggregate: member_audio_book_collection_aggregate
  /** An array relationship */
  member_audio_book_favorites: Array<member_audio_book_favorite>
  /** An aggregate relationship */
  member_audio_book_favorites_aggregate: member_audio_book_favorite_aggregate
  name: Maybe<Scalars['String']>
  password: Maybe<Scalars['String']>
  password_hash: Maybe<Scalars['String']>
  /** An array relationship */
  playlists: Array<playlist>
  /** An aggregate relationship */
  playlists_aggregate: playlist_aggregate
  refresh_token: Maybe<Scalars['String']>
  /** An array relationship */
  reviews: Array<review>
  /** An aggregate relationship */
  reviews_aggregate: review_aggregate
  role: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
  username: Scalars['String']
}

/** columns and relationships of "member" */
export type membercommentsArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

/** columns and relationships of "member" */
export type membercomments_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

/** columns and relationships of "member" */
export type memberfavoritesArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

/** columns and relationships of "member" */
export type memberfavorites_aggregateArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_artwork_collectionsArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_artwork_collections_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_audio_book_collectionsArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_audio_book_collections_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_audio_book_favoritesArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

/** columns and relationships of "member" */
export type membermember_audio_book_favorites_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

/** columns and relationships of "member" */
export type memberplaylistsArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

/** columns and relationships of "member" */
export type memberplaylists_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

/** columns and relationships of "member" */
export type memberreviewsArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

/** columns and relationships of "member" */
export type memberreviews_aggregateArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

/** aggregated selection of "member" */
export type member_aggregate = {
  __typename: 'member_aggregate'
  aggregate: Maybe<member_aggregate_fields>
  nodes: Array<member>
}

/** aggregate fields of "member" */
export type member_aggregate_fields = {
  __typename: 'member_aggregate_fields'
  avg: Maybe<member_avg_fields>
  count: Scalars['Int']
  max: Maybe<member_max_fields>
  min: Maybe<member_min_fields>
  stddev: Maybe<member_stddev_fields>
  stddev_pop: Maybe<member_stddev_pop_fields>
  stddev_samp: Maybe<member_stddev_samp_fields>
  sum: Maybe<member_sum_fields>
  var_pop: Maybe<member_var_pop_fields>
  var_samp: Maybe<member_var_samp_fields>
  variance: Maybe<member_variance_fields>
}

/** aggregate fields of "member" */
export type member_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<member_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** columns and relationships of "member_artwork_collection" */
export type member_artwork_collection = {
  __typename: 'member_artwork_collection'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  id: Scalars['bigint']
  /** An object relationship */
  member: member
  member_id: Scalars['bigint']
}

/** aggregated selection of "member_artwork_collection" */
export type member_artwork_collection_aggregate = {
  __typename: 'member_artwork_collection_aggregate'
  aggregate: Maybe<member_artwork_collection_aggregate_fields>
  nodes: Array<member_artwork_collection>
}

/** aggregate fields of "member_artwork_collection" */
export type member_artwork_collection_aggregate_fields = {
  __typename: 'member_artwork_collection_aggregate_fields'
  avg: Maybe<member_artwork_collection_avg_fields>
  count: Scalars['Int']
  max: Maybe<member_artwork_collection_max_fields>
  min: Maybe<member_artwork_collection_min_fields>
  stddev: Maybe<member_artwork_collection_stddev_fields>
  stddev_pop: Maybe<member_artwork_collection_stddev_pop_fields>
  stddev_samp: Maybe<member_artwork_collection_stddev_samp_fields>
  sum: Maybe<member_artwork_collection_sum_fields>
  var_pop: Maybe<member_artwork_collection_var_pop_fields>
  var_samp: Maybe<member_artwork_collection_var_samp_fields>
  variance: Maybe<member_artwork_collection_variance_fields>
}

/** aggregate fields of "member_artwork_collection" */
export type member_artwork_collection_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<member_artwork_collection_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "member_artwork_collection" */
export type member_artwork_collection_aggregate_order_by = {
  avg?: InputMaybe<member_artwork_collection_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<member_artwork_collection_max_order_by>
  min?: InputMaybe<member_artwork_collection_min_order_by>
  stddev?: InputMaybe<member_artwork_collection_stddev_order_by>
  stddev_pop?: InputMaybe<member_artwork_collection_stddev_pop_order_by>
  stddev_samp?: InputMaybe<member_artwork_collection_stddev_samp_order_by>
  sum?: InputMaybe<member_artwork_collection_sum_order_by>
  var_pop?: InputMaybe<member_artwork_collection_var_pop_order_by>
  var_samp?: InputMaybe<member_artwork_collection_var_samp_order_by>
  variance?: InputMaybe<member_artwork_collection_variance_order_by>
}

/** input type for inserting array relation for remote table "member_artwork_collection" */
export type member_artwork_collection_arr_rel_insert_input = {
  data: Array<member_artwork_collection_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<member_artwork_collection_on_conflict>
}

/** aggregate avg on columns */
export type member_artwork_collection_avg_fields = {
  __typename: 'member_artwork_collection_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "member_artwork_collection" */
export type member_artwork_collection_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "member_artwork_collection". All fields are combined with a logical 'AND'. */
export type member_artwork_collection_bool_exp = {
  _and?: InputMaybe<Array<member_artwork_collection_bool_exp>>
  _not?: InputMaybe<member_artwork_collection_bool_exp>
  _or?: InputMaybe<Array<member_artwork_collection_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "member_artwork_collection" */
export enum member_artwork_collection_constraint {
  /** unique or primary key constraint */
  collection_artwork_id_member_id_key = 'collection_artwork_id_member_id_key',
  /** unique or primary key constraint */
  collection_pkey = 'collection_pkey',
}

/** input type for incrementing numeric columns in table "member_artwork_collection" */
export type member_artwork_collection_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "member_artwork_collection" */
export type member_artwork_collection_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type member_artwork_collection_max_fields = {
  __typename: 'member_artwork_collection_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "member_artwork_collection" */
export type member_artwork_collection_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type member_artwork_collection_min_fields = {
  __typename: 'member_artwork_collection_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "member_artwork_collection" */
export type member_artwork_collection_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "member_artwork_collection" */
export type member_artwork_collection_mutation_response = {
  __typename: 'member_artwork_collection_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<member_artwork_collection>
}

/** on conflict condition type for table "member_artwork_collection" */
export type member_artwork_collection_on_conflict = {
  constraint: member_artwork_collection_constraint
  update_columns?: Array<member_artwork_collection_update_column>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

/** Ordering options when selecting data from "member_artwork_collection". */
export type member_artwork_collection_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
}

/** primary key columns input for table: member_artwork_collection */
export type member_artwork_collection_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "member_artwork_collection" */
export enum member_artwork_collection_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "member_artwork_collection" */
export type member_artwork_collection_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type member_artwork_collection_stddev_fields = {
  __typename: 'member_artwork_collection_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "member_artwork_collection" */
export type member_artwork_collection_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type member_artwork_collection_stddev_pop_fields = {
  __typename: 'member_artwork_collection_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "member_artwork_collection" */
export type member_artwork_collection_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type member_artwork_collection_stddev_samp_fields = {
  __typename: 'member_artwork_collection_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "member_artwork_collection" */
export type member_artwork_collection_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type member_artwork_collection_sum_fields = {
  __typename: 'member_artwork_collection_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "member_artwork_collection" */
export type member_artwork_collection_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "member_artwork_collection" */
export enum member_artwork_collection_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type member_artwork_collection_var_pop_fields = {
  __typename: 'member_artwork_collection_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "member_artwork_collection" */
export type member_artwork_collection_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type member_artwork_collection_var_samp_fields = {
  __typename: 'member_artwork_collection_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "member_artwork_collection" */
export type member_artwork_collection_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type member_artwork_collection_variance_fields = {
  __typename: 'member_artwork_collection_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "member_artwork_collection" */
export type member_artwork_collection_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** columns and relationships of "member_audio_book_collection" */
export type member_audio_book_collection = {
  __typename: 'member_audio_book_collection'
  audio_book_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  id: Scalars['bigint']
  member_id: Scalars['bigint']
}

/** aggregated selection of "member_audio_book_collection" */
export type member_audio_book_collection_aggregate = {
  __typename: 'member_audio_book_collection_aggregate'
  aggregate: Maybe<member_audio_book_collection_aggregate_fields>
  nodes: Array<member_audio_book_collection>
}

/** aggregate fields of "member_audio_book_collection" */
export type member_audio_book_collection_aggregate_fields = {
  __typename: 'member_audio_book_collection_aggregate_fields'
  avg: Maybe<member_audio_book_collection_avg_fields>
  count: Scalars['Int']
  max: Maybe<member_audio_book_collection_max_fields>
  min: Maybe<member_audio_book_collection_min_fields>
  stddev: Maybe<member_audio_book_collection_stddev_fields>
  stddev_pop: Maybe<member_audio_book_collection_stddev_pop_fields>
  stddev_samp: Maybe<member_audio_book_collection_stddev_samp_fields>
  sum: Maybe<member_audio_book_collection_sum_fields>
  var_pop: Maybe<member_audio_book_collection_var_pop_fields>
  var_samp: Maybe<member_audio_book_collection_var_samp_fields>
  variance: Maybe<member_audio_book_collection_variance_fields>
}

/** aggregate fields of "member_audio_book_collection" */
export type member_audio_book_collection_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<member_audio_book_collection_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "member_audio_book_collection" */
export type member_audio_book_collection_aggregate_order_by = {
  avg?: InputMaybe<member_audio_book_collection_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<member_audio_book_collection_max_order_by>
  min?: InputMaybe<member_audio_book_collection_min_order_by>
  stddev?: InputMaybe<member_audio_book_collection_stddev_order_by>
  stddev_pop?: InputMaybe<member_audio_book_collection_stddev_pop_order_by>
  stddev_samp?: InputMaybe<member_audio_book_collection_stddev_samp_order_by>
  sum?: InputMaybe<member_audio_book_collection_sum_order_by>
  var_pop?: InputMaybe<member_audio_book_collection_var_pop_order_by>
  var_samp?: InputMaybe<member_audio_book_collection_var_samp_order_by>
  variance?: InputMaybe<member_audio_book_collection_variance_order_by>
}

/** input type for inserting array relation for remote table "member_audio_book_collection" */
export type member_audio_book_collection_arr_rel_insert_input = {
  data: Array<member_audio_book_collection_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<member_audio_book_collection_on_conflict>
}

/** aggregate avg on columns */
export type member_audio_book_collection_avg_fields = {
  __typename: 'member_audio_book_collection_avg_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_avg_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "member_audio_book_collection". All fields are combined with a logical 'AND'. */
export type member_audio_book_collection_bool_exp = {
  _and?: InputMaybe<Array<member_audio_book_collection_bool_exp>>
  _not?: InputMaybe<member_audio_book_collection_bool_exp>
  _or?: InputMaybe<Array<member_audio_book_collection_bool_exp>>
  audio_book_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "member_audio_book_collection" */
export enum member_audio_book_collection_constraint {
  /** unique or primary key constraint */
  member_audio_book_collection_pkey = 'member_audio_book_collection_pkey',
}

/** input type for incrementing numeric columns in table "member_audio_book_collection" */
export type member_audio_book_collection_inc_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "member_audio_book_collection" */
export type member_audio_book_collection_insert_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type member_audio_book_collection_max_fields = {
  __typename: 'member_audio_book_collection_max_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_max_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type member_audio_book_collection_min_fields = {
  __typename: 'member_audio_book_collection_min_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_min_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "member_audio_book_collection" */
export type member_audio_book_collection_mutation_response = {
  __typename: 'member_audio_book_collection_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<member_audio_book_collection>
}

/** on conflict condition type for table "member_audio_book_collection" */
export type member_audio_book_collection_on_conflict = {
  constraint: member_audio_book_collection_constraint
  update_columns?: Array<member_audio_book_collection_update_column>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

/** Ordering options when selecting data from "member_audio_book_collection". */
export type member_audio_book_collection_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** primary key columns input for table: member_audio_book_collection */
export type member_audio_book_collection_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "member_audio_book_collection" */
export enum member_audio_book_collection_select_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "member_audio_book_collection" */
export type member_audio_book_collection_set_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type member_audio_book_collection_stddev_fields = {
  __typename: 'member_audio_book_collection_stddev_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_stddev_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type member_audio_book_collection_stddev_pop_fields = {
  __typename: 'member_audio_book_collection_stddev_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_stddev_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type member_audio_book_collection_stddev_samp_fields = {
  __typename: 'member_audio_book_collection_stddev_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_stddev_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type member_audio_book_collection_sum_fields = {
  __typename: 'member_audio_book_collection_sum_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_sum_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "member_audio_book_collection" */
export enum member_audio_book_collection_update_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type member_audio_book_collection_var_pop_fields = {
  __typename: 'member_audio_book_collection_var_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_var_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type member_audio_book_collection_var_samp_fields = {
  __typename: 'member_audio_book_collection_var_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_var_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type member_audio_book_collection_variance_fields = {
  __typename: 'member_audio_book_collection_variance_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "member_audio_book_collection" */
export type member_audio_book_collection_variance_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** columns and relationships of "member_audio_book_favorite" */
export type member_audio_book_favorite = {
  __typename: 'member_audio_book_favorite'
  /** An object relationship */
  audio_book: audio_book
  audio_book_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  id: Scalars['bigint']
  /** An object relationship */
  member: member
  member_id: Scalars['bigint']
}

/** aggregated selection of "member_audio_book_favorite" */
export type member_audio_book_favorite_aggregate = {
  __typename: 'member_audio_book_favorite_aggregate'
  aggregate: Maybe<member_audio_book_favorite_aggregate_fields>
  nodes: Array<member_audio_book_favorite>
}

/** aggregate fields of "member_audio_book_favorite" */
export type member_audio_book_favorite_aggregate_fields = {
  __typename: 'member_audio_book_favorite_aggregate_fields'
  avg: Maybe<member_audio_book_favorite_avg_fields>
  count: Scalars['Int']
  max: Maybe<member_audio_book_favorite_max_fields>
  min: Maybe<member_audio_book_favorite_min_fields>
  stddev: Maybe<member_audio_book_favorite_stddev_fields>
  stddev_pop: Maybe<member_audio_book_favorite_stddev_pop_fields>
  stddev_samp: Maybe<member_audio_book_favorite_stddev_samp_fields>
  sum: Maybe<member_audio_book_favorite_sum_fields>
  var_pop: Maybe<member_audio_book_favorite_var_pop_fields>
  var_samp: Maybe<member_audio_book_favorite_var_samp_fields>
  variance: Maybe<member_audio_book_favorite_variance_fields>
}

/** aggregate fields of "member_audio_book_favorite" */
export type member_audio_book_favorite_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "member_audio_book_favorite" */
export type member_audio_book_favorite_aggregate_order_by = {
  avg?: InputMaybe<member_audio_book_favorite_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<member_audio_book_favorite_max_order_by>
  min?: InputMaybe<member_audio_book_favorite_min_order_by>
  stddev?: InputMaybe<member_audio_book_favorite_stddev_order_by>
  stddev_pop?: InputMaybe<member_audio_book_favorite_stddev_pop_order_by>
  stddev_samp?: InputMaybe<member_audio_book_favorite_stddev_samp_order_by>
  sum?: InputMaybe<member_audio_book_favorite_sum_order_by>
  var_pop?: InputMaybe<member_audio_book_favorite_var_pop_order_by>
  var_samp?: InputMaybe<member_audio_book_favorite_var_samp_order_by>
  variance?: InputMaybe<member_audio_book_favorite_variance_order_by>
}

/** input type for inserting array relation for remote table "member_audio_book_favorite" */
export type member_audio_book_favorite_arr_rel_insert_input = {
  data: Array<member_audio_book_favorite_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<member_audio_book_favorite_on_conflict>
}

/** aggregate avg on columns */
export type member_audio_book_favorite_avg_fields = {
  __typename: 'member_audio_book_favorite_avg_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_avg_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "member_audio_book_favorite". All fields are combined with a logical 'AND'. */
export type member_audio_book_favorite_bool_exp = {
  _and?: InputMaybe<Array<member_audio_book_favorite_bool_exp>>
  _not?: InputMaybe<member_audio_book_favorite_bool_exp>
  _or?: InputMaybe<Array<member_audio_book_favorite_bool_exp>>
  audio_book?: InputMaybe<audio_book_bool_exp>
  audio_book_id?: InputMaybe<bigint_comparison_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "member_audio_book_favorite" */
export enum member_audio_book_favorite_constraint {
  /** unique or primary key constraint */
  member_audio_book_favorite_pkey = 'member_audio_book_favorite_pkey',
}

/** input type for incrementing numeric columns in table "member_audio_book_favorite" */
export type member_audio_book_favorite_inc_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "member_audio_book_favorite" */
export type member_audio_book_favorite_insert_input = {
  audio_book?: InputMaybe<audio_book_obj_rel_insert_input>
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type member_audio_book_favorite_max_fields = {
  __typename: 'member_audio_book_favorite_max_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_max_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type member_audio_book_favorite_min_fields = {
  __typename: 'member_audio_book_favorite_min_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_min_order_by = {
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "member_audio_book_favorite" */
export type member_audio_book_favorite_mutation_response = {
  __typename: 'member_audio_book_favorite_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<member_audio_book_favorite>
}

/** on conflict condition type for table "member_audio_book_favorite" */
export type member_audio_book_favorite_on_conflict = {
  constraint: member_audio_book_favorite_constraint
  update_columns?: Array<member_audio_book_favorite_update_column>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

/** Ordering options when selecting data from "member_audio_book_favorite". */
export type member_audio_book_favorite_order_by = {
  audio_book?: InputMaybe<audio_book_order_by>
  audio_book_id?: InputMaybe<order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
}

/** primary key columns input for table: member_audio_book_favorite */
export type member_audio_book_favorite_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "member_audio_book_favorite" */
export enum member_audio_book_favorite_select_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "member_audio_book_favorite" */
export type member_audio_book_favorite_set_input = {
  audio_book_id?: InputMaybe<Scalars['bigint']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type member_audio_book_favorite_stddev_fields = {
  __typename: 'member_audio_book_favorite_stddev_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_stddev_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type member_audio_book_favorite_stddev_pop_fields = {
  __typename: 'member_audio_book_favorite_stddev_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_stddev_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type member_audio_book_favorite_stddev_samp_fields = {
  __typename: 'member_audio_book_favorite_stddev_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_stddev_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type member_audio_book_favorite_sum_fields = {
  __typename: 'member_audio_book_favorite_sum_fields'
  audio_book_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_sum_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "member_audio_book_favorite" */
export enum member_audio_book_favorite_update_column {
  /** column name */
  audio_book_id = 'audio_book_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type member_audio_book_favorite_var_pop_fields = {
  __typename: 'member_audio_book_favorite_var_pop_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_var_pop_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type member_audio_book_favorite_var_samp_fields = {
  __typename: 'member_audio_book_favorite_var_samp_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_var_samp_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type member_audio_book_favorite_variance_fields = {
  __typename: 'member_audio_book_favorite_variance_fields'
  audio_book_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "member_audio_book_favorite" */
export type member_audio_book_favorite_variance_order_by = {
  audio_book_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate avg on columns */
export type member_avg_fields = {
  __typename: 'member_avg_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type member_bool_exp = {
  _and?: InputMaybe<Array<member_bool_exp>>
  _not?: InputMaybe<member_bool_exp>
  _or?: InputMaybe<Array<member_bool_exp>>
  avatar_url?: InputMaybe<String_comparison_exp>
  category?: InputMaybe<Int_comparison_exp>
  comments?: InputMaybe<artwork_comment_bool_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  email?: InputMaybe<String_comparison_exp>
  favorites?: InputMaybe<favorite_bool_exp>
  id?: InputMaybe<bigint_comparison_exp>
  login_at?: InputMaybe<timestamptz_comparison_exp>
  member_artwork_collections?: InputMaybe<member_artwork_collection_bool_exp>
  member_audio_book_collections?: InputMaybe<member_audio_book_collection_bool_exp>
  member_audio_book_favorites?: InputMaybe<member_audio_book_favorite_bool_exp>
  name?: InputMaybe<String_comparison_exp>
  password?: InputMaybe<String_comparison_exp>
  password_hash?: InputMaybe<String_comparison_exp>
  playlists?: InputMaybe<playlist_bool_exp>
  refresh_token?: InputMaybe<String_comparison_exp>
  reviews?: InputMaybe<review_bool_exp>
  role?: InputMaybe<String_comparison_exp>
  updated_at?: InputMaybe<timestamptz_comparison_exp>
  username?: InputMaybe<String_comparison_exp>
}

/** unique or primary key constraints on table "member" */
export enum member_constraint {
  /** unique or primary key constraint */
  Member_pkey = 'Member_pkey',
  /** unique or primary key constraint */
  member_email_key = 'member_email_key',
}

/** input type for incrementing numeric columns in table "member" */
export type member_inc_input = {
  category?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "member" */
export type member_insert_input = {
  avatar_url?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Scalars['Int']>
  comments?: InputMaybe<artwork_comment_arr_rel_insert_input>
  created_at?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  favorites?: InputMaybe<favorite_arr_rel_insert_input>
  id?: InputMaybe<Scalars['bigint']>
  login_at?: InputMaybe<Scalars['timestamptz']>
  member_artwork_collections?: InputMaybe<member_artwork_collection_arr_rel_insert_input>
  member_audio_book_collections?: InputMaybe<member_audio_book_collection_arr_rel_insert_input>
  member_audio_book_favorites?: InputMaybe<member_audio_book_favorite_arr_rel_insert_input>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  password_hash?: InputMaybe<Scalars['String']>
  playlists?: InputMaybe<playlist_arr_rel_insert_input>
  refresh_token?: InputMaybe<Scalars['String']>
  reviews?: InputMaybe<review_arr_rel_insert_input>
  role?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type member_max_fields = {
  __typename: 'member_max_fields'
  avatar_url: Maybe<Scalars['String']>
  category: Maybe<Scalars['Int']>
  created_at: Maybe<Scalars['timestamptz']>
  email: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  login_at: Maybe<Scalars['timestamptz']>
  name: Maybe<Scalars['String']>
  password: Maybe<Scalars['String']>
  password_hash: Maybe<Scalars['String']>
  refresh_token: Maybe<Scalars['String']>
  role: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
  username: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type member_min_fields = {
  __typename: 'member_min_fields'
  avatar_url: Maybe<Scalars['String']>
  category: Maybe<Scalars['Int']>
  created_at: Maybe<Scalars['timestamptz']>
  email: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  login_at: Maybe<Scalars['timestamptz']>
  name: Maybe<Scalars['String']>
  password: Maybe<Scalars['String']>
  password_hash: Maybe<Scalars['String']>
  refresh_token: Maybe<Scalars['String']>
  role: Maybe<Scalars['String']>
  updated_at: Maybe<Scalars['timestamptz']>
  username: Maybe<Scalars['String']>
}

/** response of any mutation on the table "member" */
export type member_mutation_response = {
  __typename: 'member_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<member>
}

/** input type for inserting object relation for remote table "member" */
export type member_obj_rel_insert_input = {
  data: member_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<member_on_conflict>
}

/** on conflict condition type for table "member" */
export type member_on_conflict = {
  constraint: member_constraint
  update_columns?: Array<member_update_column>
  where?: InputMaybe<member_bool_exp>
}

/** Ordering options when selecting data from "member". */
export type member_order_by = {
  avatar_url?: InputMaybe<order_by>
  category?: InputMaybe<order_by>
  comments_aggregate?: InputMaybe<artwork_comment_aggregate_order_by>
  created_at?: InputMaybe<order_by>
  email?: InputMaybe<order_by>
  favorites_aggregate?: InputMaybe<favorite_aggregate_order_by>
  id?: InputMaybe<order_by>
  login_at?: InputMaybe<order_by>
  member_artwork_collections_aggregate?: InputMaybe<member_artwork_collection_aggregate_order_by>
  member_audio_book_collections_aggregate?: InputMaybe<member_audio_book_collection_aggregate_order_by>
  member_audio_book_favorites_aggregate?: InputMaybe<member_audio_book_favorite_aggregate_order_by>
  name?: InputMaybe<order_by>
  password?: InputMaybe<order_by>
  password_hash?: InputMaybe<order_by>
  playlists_aggregate?: InputMaybe<playlist_aggregate_order_by>
  refresh_token?: InputMaybe<order_by>
  reviews_aggregate?: InputMaybe<review_aggregate_order_by>
  role?: InputMaybe<order_by>
  updated_at?: InputMaybe<order_by>
  username?: InputMaybe<order_by>
}

/** primary key columns input for table: member */
export type member_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "member" */
export enum member_select_column {
  /** column name */
  avatar_url = 'avatar_url',
  /** column name */
  category = 'category',
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  id = 'id',
  /** column name */
  login_at = 'login_at',
  /** column name */
  name = 'name',
  /** column name */
  password = 'password',
  /** column name */
  password_hash = 'password_hash',
  /** column name */
  refresh_token = 'refresh_token',
  /** column name */
  role = 'role',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  username = 'username',
}

/** input type for updating data in table "member" */
export type member_set_input = {
  avatar_url?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Scalars['Int']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  login_at?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  password_hash?: InputMaybe<Scalars['String']>
  refresh_token?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type member_stddev_fields = {
  __typename: 'member_stddev_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type member_stddev_pop_fields = {
  __typename: 'member_stddev_pop_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type member_stddev_samp_fields = {
  __typename: 'member_stddev_samp_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type member_sum_fields = {
  __typename: 'member_sum_fields'
  category: Maybe<Scalars['Int']>
  id: Maybe<Scalars['bigint']>
}

/** update columns of table "member" */
export enum member_update_column {
  /** column name */
  avatar_url = 'avatar_url',
  /** column name */
  category = 'category',
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  id = 'id',
  /** column name */
  login_at = 'login_at',
  /** column name */
  name = 'name',
  /** column name */
  password = 'password',
  /** column name */
  password_hash = 'password_hash',
  /** column name */
  refresh_token = 'refresh_token',
  /** column name */
  role = 'role',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  username = 'username',
}

/** aggregate var_pop on columns */
export type member_var_pop_fields = {
  __typename: 'member_var_pop_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type member_var_samp_fields = {
  __typename: 'member_var_samp_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type member_variance_fields = {
  __typename: 'member_variance_fields'
  category: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
}

/** columns and relationships of "museum" */
export type museum = {
  __typename: 'museum'
  /** An array relationship */
  artworks: Array<artwork>
  /** An aggregate relationship */
  artworks_aggregate: artwork_aggregate
  id: Scalars['bigint']
  name: Maybe<Scalars['String']>
}

/** columns and relationships of "museum" */
export type museumartworksArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

/** columns and relationships of "museum" */
export type museumartworks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

/** aggregated selection of "museum" */
export type museum_aggregate = {
  __typename: 'museum_aggregate'
  aggregate: Maybe<museum_aggregate_fields>
  nodes: Array<museum>
}

/** aggregate fields of "museum" */
export type museum_aggregate_fields = {
  __typename: 'museum_aggregate_fields'
  avg: Maybe<museum_avg_fields>
  count: Scalars['Int']
  max: Maybe<museum_max_fields>
  min: Maybe<museum_min_fields>
  stddev: Maybe<museum_stddev_fields>
  stddev_pop: Maybe<museum_stddev_pop_fields>
  stddev_samp: Maybe<museum_stddev_samp_fields>
  sum: Maybe<museum_sum_fields>
  var_pop: Maybe<museum_var_pop_fields>
  var_samp: Maybe<museum_var_samp_fields>
  variance: Maybe<museum_variance_fields>
}

/** aggregate fields of "museum" */
export type museum_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<museum_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type museum_avg_fields = {
  __typename: 'museum_avg_fields'
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "museum". All fields are combined with a logical 'AND'. */
export type museum_bool_exp = {
  _and?: InputMaybe<Array<museum_bool_exp>>
  _not?: InputMaybe<museum_bool_exp>
  _or?: InputMaybe<Array<museum_bool_exp>>
  artworks?: InputMaybe<artwork_bool_exp>
  id?: InputMaybe<bigint_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
}

/** unique or primary key constraints on table "museum" */
export enum museum_constraint {
  /** unique or primary key constraint */
  Museum_pkey = 'Museum_pkey',
}

/** input type for incrementing numeric columns in table "museum" */
export type museum_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "museum" */
export type museum_insert_input = {
  artworks?: InputMaybe<artwork_arr_rel_insert_input>
  id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type museum_max_fields = {
  __typename: 'museum_max_fields'
  id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type museum_min_fields = {
  __typename: 'museum_min_fields'
  id: Maybe<Scalars['bigint']>
  name: Maybe<Scalars['String']>
}

/** response of any mutation on the table "museum" */
export type museum_mutation_response = {
  __typename: 'museum_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<museum>
}

/** input type for inserting object relation for remote table "museum" */
export type museum_obj_rel_insert_input = {
  data: museum_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<museum_on_conflict>
}

/** on conflict condition type for table "museum" */
export type museum_on_conflict = {
  constraint: museum_constraint
  update_columns?: Array<museum_update_column>
  where?: InputMaybe<museum_bool_exp>
}

/** Ordering options when selecting data from "museum". */
export type museum_order_by = {
  artworks_aggregate?: InputMaybe<artwork_aggregate_order_by>
  id?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
}

/** primary key columns input for table: museum */
export type museum_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "museum" */
export enum museum_select_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "museum" */
export type museum_set_input = {
  id?: InputMaybe<Scalars['bigint']>
  name?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type museum_stddev_fields = {
  __typename: 'museum_stddev_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type museum_stddev_pop_fields = {
  __typename: 'museum_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type museum_stddev_samp_fields = {
  __typename: 'museum_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type museum_sum_fields = {
  __typename: 'museum_sum_fields'
  id: Maybe<Scalars['bigint']>
}

/** update columns of table "museum" */
export enum museum_update_column {
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** aggregate var_pop on columns */
export type museum_var_pop_fields = {
  __typename: 'museum_var_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type museum_var_samp_fields = {
  __typename: 'museum_var_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type museum_variance_fields = {
  __typename: 'museum_variance_fields'
  id: Maybe<Scalars['Float']>
}

/** mutation root */
export type mutation_root = {
  __typename: 'mutation_root'
  /** delete data from the table: "artwork" */
  delete_artwork: Maybe<artwork_mutation_response>
  /** delete single row from the table: "artwork" */
  delete_artwork_by_pk: Maybe<artwork>
  /** delete data from the table: "artwork_comment" */
  delete_artwork_comment: Maybe<artwork_comment_mutation_response>
  /** delete single row from the table: "artwork_comment" */
  delete_artwork_comment_by_pk: Maybe<artwork_comment>
  /** delete data from the table: "audio_book" */
  delete_audio_book: Maybe<audio_book_mutation_response>
  /** delete single row from the table: "audio_book" */
  delete_audio_book_by_pk: Maybe<audio_book>
  /** delete data from the table: "audio_book_category" */
  delete_audio_book_category: Maybe<audio_book_category_mutation_response>
  /** delete single row from the table: "audio_book_category" */
  delete_audio_book_category_by_pk: Maybe<audio_book_category>
  /** delete data from the table: "audio_book_tag" */
  delete_audio_book_tag: Maybe<audio_book_tag_mutation_response>
  /** delete single row from the table: "audio_book_tag" */
  delete_audio_book_tag_by_pk: Maybe<audio_book_tag>
  /** delete data from the table: "category" */
  delete_category: Maybe<category_mutation_response>
  /** delete single row from the table: "category" */
  delete_category_by_pk: Maybe<category>
  /** delete data from the table: "creator" */
  delete_creator: Maybe<creator_mutation_response>
  /** delete single row from the table: "creator" */
  delete_creator_by_pk: Maybe<creator>
  /** delete data from the table: "exhibition" */
  delete_exhibition: Maybe<exhibition_mutation_response>
  /** delete data from the table: "exhibition_artwork" */
  delete_exhibition_artwork: Maybe<exhibition_artwork_mutation_response>
  /** delete single row from the table: "exhibition_artwork" */
  delete_exhibition_artwork_by_pk: Maybe<exhibition_artwork>
  /** delete single row from the table: "exhibition" */
  delete_exhibition_by_pk: Maybe<exhibition>
  /** delete data from the table: "favorite" */
  delete_favorite: Maybe<favorite_mutation_response>
  /** delete single row from the table: "favorite" */
  delete_favorite_by_pk: Maybe<favorite>
  /** delete data from the table: "member" */
  delete_member: Maybe<member_mutation_response>
  /** delete data from the table: "member_artwork_collection" */
  delete_member_artwork_collection: Maybe<member_artwork_collection_mutation_response>
  /** delete single row from the table: "member_artwork_collection" */
  delete_member_artwork_collection_by_pk: Maybe<member_artwork_collection>
  /** delete data from the table: "member_audio_book_collection" */
  delete_member_audio_book_collection: Maybe<member_audio_book_collection_mutation_response>
  /** delete single row from the table: "member_audio_book_collection" */
  delete_member_audio_book_collection_by_pk: Maybe<member_audio_book_collection>
  /** delete data from the table: "member_audio_book_favorite" */
  delete_member_audio_book_favorite: Maybe<member_audio_book_favorite_mutation_response>
  /** delete single row from the table: "member_audio_book_favorite" */
  delete_member_audio_book_favorite_by_pk: Maybe<member_audio_book_favorite>
  /** delete single row from the table: "member" */
  delete_member_by_pk: Maybe<member>
  /** delete data from the table: "museum" */
  delete_museum: Maybe<museum_mutation_response>
  /** delete single row from the table: "museum" */
  delete_museum_by_pk: Maybe<museum>
  /** delete data from the table: "playlist" */
  delete_playlist: Maybe<playlist_mutation_response>
  /** delete single row from the table: "playlist" */
  delete_playlist_by_pk: Maybe<playlist>
  /** delete data from the table: "playlist_item" */
  delete_playlist_item: Maybe<playlist_item_mutation_response>
  /** delete single row from the table: "playlist_item" */
  delete_playlist_item_by_pk: Maybe<playlist_item>
  /** delete data from the table: "review" */
  delete_review: Maybe<review_mutation_response>
  /** delete single row from the table: "review" */
  delete_review_by_pk: Maybe<review>
  /** delete data from the table: "tag" */
  delete_tag: Maybe<tag_mutation_response>
  /** delete single row from the table: "tag" */
  delete_tag_by_pk: Maybe<tag>
  /** insert data into the table: "artwork" */
  insert_artwork: Maybe<artwork_mutation_response>
  /** insert data into the table: "artwork_comment" */
  insert_artwork_comment: Maybe<artwork_comment_mutation_response>
  /** insert a single row into the table: "artwork_comment" */
  insert_artwork_comment_one: Maybe<artwork_comment>
  /** insert a single row into the table: "artwork" */
  insert_artwork_one: Maybe<artwork>
  /** insert data into the table: "audio_book" */
  insert_audio_book: Maybe<audio_book_mutation_response>
  /** insert data into the table: "audio_book_category" */
  insert_audio_book_category: Maybe<audio_book_category_mutation_response>
  /** insert a single row into the table: "audio_book_category" */
  insert_audio_book_category_one: Maybe<audio_book_category>
  /** insert a single row into the table: "audio_book" */
  insert_audio_book_one: Maybe<audio_book>
  /** insert data into the table: "audio_book_tag" */
  insert_audio_book_tag: Maybe<audio_book_tag_mutation_response>
  /** insert a single row into the table: "audio_book_tag" */
  insert_audio_book_tag_one: Maybe<audio_book_tag>
  /** insert data into the table: "category" */
  insert_category: Maybe<category_mutation_response>
  /** insert a single row into the table: "category" */
  insert_category_one: Maybe<category>
  /** insert data into the table: "creator" */
  insert_creator: Maybe<creator_mutation_response>
  /** insert a single row into the table: "creator" */
  insert_creator_one: Maybe<creator>
  /** insert data into the table: "exhibition" */
  insert_exhibition: Maybe<exhibition_mutation_response>
  /** insert data into the table: "exhibition_artwork" */
  insert_exhibition_artwork: Maybe<exhibition_artwork_mutation_response>
  /** insert a single row into the table: "exhibition_artwork" */
  insert_exhibition_artwork_one: Maybe<exhibition_artwork>
  /** insert a single row into the table: "exhibition" */
  insert_exhibition_one: Maybe<exhibition>
  /** insert data into the table: "favorite" */
  insert_favorite: Maybe<favorite_mutation_response>
  /** insert a single row into the table: "favorite" */
  insert_favorite_one: Maybe<favorite>
  /** insert data into the table: "member" */
  insert_member: Maybe<member_mutation_response>
  /** insert data into the table: "member_artwork_collection" */
  insert_member_artwork_collection: Maybe<member_artwork_collection_mutation_response>
  /** insert a single row into the table: "member_artwork_collection" */
  insert_member_artwork_collection_one: Maybe<member_artwork_collection>
  /** insert data into the table: "member_audio_book_collection" */
  insert_member_audio_book_collection: Maybe<member_audio_book_collection_mutation_response>
  /** insert a single row into the table: "member_audio_book_collection" */
  insert_member_audio_book_collection_one: Maybe<member_audio_book_collection>
  /** insert data into the table: "member_audio_book_favorite" */
  insert_member_audio_book_favorite: Maybe<member_audio_book_favorite_mutation_response>
  /** insert a single row into the table: "member_audio_book_favorite" */
  insert_member_audio_book_favorite_one: Maybe<member_audio_book_favorite>
  /** insert a single row into the table: "member" */
  insert_member_one: Maybe<member>
  /** insert data into the table: "museum" */
  insert_museum: Maybe<museum_mutation_response>
  /** insert a single row into the table: "museum" */
  insert_museum_one: Maybe<museum>
  /** insert data into the table: "playlist" */
  insert_playlist: Maybe<playlist_mutation_response>
  /** insert data into the table: "playlist_item" */
  insert_playlist_item: Maybe<playlist_item_mutation_response>
  /** insert a single row into the table: "playlist_item" */
  insert_playlist_item_one: Maybe<playlist_item>
  /** insert a single row into the table: "playlist" */
  insert_playlist_one: Maybe<playlist>
  /** insert data into the table: "review" */
  insert_review: Maybe<review_mutation_response>
  /** insert a single row into the table: "review" */
  insert_review_one: Maybe<review>
  /** insert data into the table: "tag" */
  insert_tag: Maybe<tag_mutation_response>
  /** insert a single row into the table: "tag" */
  insert_tag_one: Maybe<tag>
  /** update data of the table: "artwork" */
  update_artwork: Maybe<artwork_mutation_response>
  /** update single row of the table: "artwork" */
  update_artwork_by_pk: Maybe<artwork>
  /** update data of the table: "artwork_comment" */
  update_artwork_comment: Maybe<artwork_comment_mutation_response>
  /** update single row of the table: "artwork_comment" */
  update_artwork_comment_by_pk: Maybe<artwork_comment>
  /** update data of the table: "audio_book" */
  update_audio_book: Maybe<audio_book_mutation_response>
  /** update single row of the table: "audio_book" */
  update_audio_book_by_pk: Maybe<audio_book>
  /** update data of the table: "audio_book_category" */
  update_audio_book_category: Maybe<audio_book_category_mutation_response>
  /** update single row of the table: "audio_book_category" */
  update_audio_book_category_by_pk: Maybe<audio_book_category>
  /** update data of the table: "audio_book_tag" */
  update_audio_book_tag: Maybe<audio_book_tag_mutation_response>
  /** update single row of the table: "audio_book_tag" */
  update_audio_book_tag_by_pk: Maybe<audio_book_tag>
  /** update data of the table: "category" */
  update_category: Maybe<category_mutation_response>
  /** update single row of the table: "category" */
  update_category_by_pk: Maybe<category>
  /** update data of the table: "creator" */
  update_creator: Maybe<creator_mutation_response>
  /** update single row of the table: "creator" */
  update_creator_by_pk: Maybe<creator>
  /** update data of the table: "exhibition" */
  update_exhibition: Maybe<exhibition_mutation_response>
  /** update data of the table: "exhibition_artwork" */
  update_exhibition_artwork: Maybe<exhibition_artwork_mutation_response>
  /** update single row of the table: "exhibition_artwork" */
  update_exhibition_artwork_by_pk: Maybe<exhibition_artwork>
  /** update single row of the table: "exhibition" */
  update_exhibition_by_pk: Maybe<exhibition>
  /** update data of the table: "favorite" */
  update_favorite: Maybe<favorite_mutation_response>
  /** update single row of the table: "favorite" */
  update_favorite_by_pk: Maybe<favorite>
  /** update data of the table: "member" */
  update_member: Maybe<member_mutation_response>
  /** update data of the table: "member_artwork_collection" */
  update_member_artwork_collection: Maybe<member_artwork_collection_mutation_response>
  /** update single row of the table: "member_artwork_collection" */
  update_member_artwork_collection_by_pk: Maybe<member_artwork_collection>
  /** update data of the table: "member_audio_book_collection" */
  update_member_audio_book_collection: Maybe<member_audio_book_collection_mutation_response>
  /** update single row of the table: "member_audio_book_collection" */
  update_member_audio_book_collection_by_pk: Maybe<member_audio_book_collection>
  /** update data of the table: "member_audio_book_favorite" */
  update_member_audio_book_favorite: Maybe<member_audio_book_favorite_mutation_response>
  /** update single row of the table: "member_audio_book_favorite" */
  update_member_audio_book_favorite_by_pk: Maybe<member_audio_book_favorite>
  /** update single row of the table: "member" */
  update_member_by_pk: Maybe<member>
  /** update data of the table: "museum" */
  update_museum: Maybe<museum_mutation_response>
  /** update single row of the table: "museum" */
  update_museum_by_pk: Maybe<museum>
  /** update data of the table: "playlist" */
  update_playlist: Maybe<playlist_mutation_response>
  /** update single row of the table: "playlist" */
  update_playlist_by_pk: Maybe<playlist>
  /** update data of the table: "playlist_item" */
  update_playlist_item: Maybe<playlist_item_mutation_response>
  /** update single row of the table: "playlist_item" */
  update_playlist_item_by_pk: Maybe<playlist_item>
  /** update data of the table: "review" */
  update_review: Maybe<review_mutation_response>
  /** update single row of the table: "review" */
  update_review_by_pk: Maybe<review>
  /** update data of the table: "tag" */
  update_tag: Maybe<tag_mutation_response>
  /** update single row of the table: "tag" */
  update_tag_by_pk: Maybe<tag>
}

/** mutation root */
export type mutation_rootdelete_artworkArgs = {
  where: artwork_bool_exp
}

/** mutation root */
export type mutation_rootdelete_artwork_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_artwork_commentArgs = {
  where: artwork_comment_bool_exp
}

/** mutation root */
export type mutation_rootdelete_artwork_comment_by_pkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type mutation_rootdelete_audio_bookArgs = {
  where: audio_book_bool_exp
}

/** mutation root */
export type mutation_rootdelete_audio_book_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_audio_book_categoryArgs = {
  where: audio_book_category_bool_exp
}

/** mutation root */
export type mutation_rootdelete_audio_book_category_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  category_id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_audio_book_tagArgs = {
  where: audio_book_tag_bool_exp
}

/** mutation root */
export type mutation_rootdelete_audio_book_tag_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  tag_id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_categoryArgs = {
  where: category_bool_exp
}

/** mutation root */
export type mutation_rootdelete_category_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_creatorArgs = {
  where: creator_bool_exp
}

/** mutation root */
export type mutation_rootdelete_creator_by_pkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type mutation_rootdelete_exhibitionArgs = {
  where: exhibition_bool_exp
}

/** mutation root */
export type mutation_rootdelete_exhibition_artworkArgs = {
  where: exhibition_artwork_bool_exp
}

/** mutation root */
export type mutation_rootdelete_exhibition_artwork_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_exhibition_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_favoriteArgs = {
  where: favorite_bool_exp
}

/** mutation root */
export type mutation_rootdelete_favorite_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_memberArgs = {
  where: member_bool_exp
}

/** mutation root */
export type mutation_rootdelete_member_artwork_collectionArgs = {
  where: member_artwork_collection_bool_exp
}

/** mutation root */
export type mutation_rootdelete_member_artwork_collection_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_member_audio_book_collectionArgs = {
  where: member_audio_book_collection_bool_exp
}

/** mutation root */
export type mutation_rootdelete_member_audio_book_collection_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_member_audio_book_favoriteArgs = {
  where: member_audio_book_favorite_bool_exp
}

/** mutation root */
export type mutation_rootdelete_member_audio_book_favorite_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_member_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_museumArgs = {
  where: museum_bool_exp
}

/** mutation root */
export type mutation_rootdelete_museum_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_playlistArgs = {
  where: playlist_bool_exp
}

/** mutation root */
export type mutation_rootdelete_playlist_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_playlist_itemArgs = {
  where: playlist_item_bool_exp
}

/** mutation root */
export type mutation_rootdelete_playlist_item_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_reviewArgs = {
  where: review_bool_exp
}

/** mutation root */
export type mutation_rootdelete_review_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootdelete_tagArgs = {
  where: tag_bool_exp
}

/** mutation root */
export type mutation_rootdelete_tag_by_pkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type mutation_rootinsert_artworkArgs = {
  objects: Array<artwork_insert_input>
  on_conflict?: InputMaybe<artwork_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_artwork_commentArgs = {
  objects: Array<artwork_comment_insert_input>
  on_conflict?: InputMaybe<artwork_comment_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_artwork_comment_oneArgs = {
  object: artwork_comment_insert_input
  on_conflict?: InputMaybe<artwork_comment_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_artwork_oneArgs = {
  object: artwork_insert_input
  on_conflict?: InputMaybe<artwork_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_bookArgs = {
  objects: Array<audio_book_insert_input>
  on_conflict?: InputMaybe<audio_book_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_book_categoryArgs = {
  objects: Array<audio_book_category_insert_input>
  on_conflict?: InputMaybe<audio_book_category_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_book_category_oneArgs = {
  object: audio_book_category_insert_input
  on_conflict?: InputMaybe<audio_book_category_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_book_oneArgs = {
  object: audio_book_insert_input
  on_conflict?: InputMaybe<audio_book_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_book_tagArgs = {
  objects: Array<audio_book_tag_insert_input>
  on_conflict?: InputMaybe<audio_book_tag_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_audio_book_tag_oneArgs = {
  object: audio_book_tag_insert_input
  on_conflict?: InputMaybe<audio_book_tag_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_categoryArgs = {
  objects: Array<category_insert_input>
  on_conflict?: InputMaybe<category_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_category_oneArgs = {
  object: category_insert_input
  on_conflict?: InputMaybe<category_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_creatorArgs = {
  objects: Array<creator_insert_input>
  on_conflict?: InputMaybe<creator_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_creator_oneArgs = {
  object: creator_insert_input
  on_conflict?: InputMaybe<creator_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_exhibitionArgs = {
  objects: Array<exhibition_insert_input>
  on_conflict?: InputMaybe<exhibition_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_exhibition_artworkArgs = {
  objects: Array<exhibition_artwork_insert_input>
  on_conflict?: InputMaybe<exhibition_artwork_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_exhibition_artwork_oneArgs = {
  object: exhibition_artwork_insert_input
  on_conflict?: InputMaybe<exhibition_artwork_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_exhibition_oneArgs = {
  object: exhibition_insert_input
  on_conflict?: InputMaybe<exhibition_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_favoriteArgs = {
  objects: Array<favorite_insert_input>
  on_conflict?: InputMaybe<favorite_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_favorite_oneArgs = {
  object: favorite_insert_input
  on_conflict?: InputMaybe<favorite_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_memberArgs = {
  objects: Array<member_insert_input>
  on_conflict?: InputMaybe<member_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_artwork_collectionArgs = {
  objects: Array<member_artwork_collection_insert_input>
  on_conflict?: InputMaybe<member_artwork_collection_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_artwork_collection_oneArgs = {
  object: member_artwork_collection_insert_input
  on_conflict?: InputMaybe<member_artwork_collection_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_audio_book_collectionArgs = {
  objects: Array<member_audio_book_collection_insert_input>
  on_conflict?: InputMaybe<member_audio_book_collection_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_audio_book_collection_oneArgs = {
  object: member_audio_book_collection_insert_input
  on_conflict?: InputMaybe<member_audio_book_collection_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_audio_book_favoriteArgs = {
  objects: Array<member_audio_book_favorite_insert_input>
  on_conflict?: InputMaybe<member_audio_book_favorite_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_audio_book_favorite_oneArgs = {
  object: member_audio_book_favorite_insert_input
  on_conflict?: InputMaybe<member_audio_book_favorite_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_member_oneArgs = {
  object: member_insert_input
  on_conflict?: InputMaybe<member_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_museumArgs = {
  objects: Array<museum_insert_input>
  on_conflict?: InputMaybe<museum_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_museum_oneArgs = {
  object: museum_insert_input
  on_conflict?: InputMaybe<museum_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_playlistArgs = {
  objects: Array<playlist_insert_input>
  on_conflict?: InputMaybe<playlist_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_playlist_itemArgs = {
  objects: Array<playlist_item_insert_input>
  on_conflict?: InputMaybe<playlist_item_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_playlist_item_oneArgs = {
  object: playlist_item_insert_input
  on_conflict?: InputMaybe<playlist_item_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_playlist_oneArgs = {
  object: playlist_insert_input
  on_conflict?: InputMaybe<playlist_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_reviewArgs = {
  objects: Array<review_insert_input>
  on_conflict?: InputMaybe<review_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_review_oneArgs = {
  object: review_insert_input
  on_conflict?: InputMaybe<review_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_tagArgs = {
  objects: Array<tag_insert_input>
  on_conflict?: InputMaybe<tag_on_conflict>
}

/** mutation root */
export type mutation_rootinsert_tag_oneArgs = {
  object: tag_insert_input
  on_conflict?: InputMaybe<tag_on_conflict>
}

/** mutation root */
export type mutation_rootupdate_artworkArgs = {
  _append?: InputMaybe<artwork_append_input>
  _delete_at_path?: InputMaybe<artwork_delete_at_path_input>
  _delete_elem?: InputMaybe<artwork_delete_elem_input>
  _delete_key?: InputMaybe<artwork_delete_key_input>
  _inc?: InputMaybe<artwork_inc_input>
  _prepend?: InputMaybe<artwork_prepend_input>
  _set?: InputMaybe<artwork_set_input>
  where: artwork_bool_exp
}

/** mutation root */
export type mutation_rootupdate_artwork_by_pkArgs = {
  _append?: InputMaybe<artwork_append_input>
  _delete_at_path?: InputMaybe<artwork_delete_at_path_input>
  _delete_elem?: InputMaybe<artwork_delete_elem_input>
  _delete_key?: InputMaybe<artwork_delete_key_input>
  _inc?: InputMaybe<artwork_inc_input>
  _prepend?: InputMaybe<artwork_prepend_input>
  _set?: InputMaybe<artwork_set_input>
  pk_columns: artwork_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_artwork_commentArgs = {
  _inc?: InputMaybe<artwork_comment_inc_input>
  _set?: InputMaybe<artwork_comment_set_input>
  where: artwork_comment_bool_exp
}

/** mutation root */
export type mutation_rootupdate_artwork_comment_by_pkArgs = {
  _inc?: InputMaybe<artwork_comment_inc_input>
  _set?: InputMaybe<artwork_comment_set_input>
  pk_columns: artwork_comment_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_audio_bookArgs = {
  _inc?: InputMaybe<audio_book_inc_input>
  _set?: InputMaybe<audio_book_set_input>
  where: audio_book_bool_exp
}

/** mutation root */
export type mutation_rootupdate_audio_book_by_pkArgs = {
  _inc?: InputMaybe<audio_book_inc_input>
  _set?: InputMaybe<audio_book_set_input>
  pk_columns: audio_book_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_audio_book_categoryArgs = {
  _inc?: InputMaybe<audio_book_category_inc_input>
  _set?: InputMaybe<audio_book_category_set_input>
  where: audio_book_category_bool_exp
}

/** mutation root */
export type mutation_rootupdate_audio_book_category_by_pkArgs = {
  _inc?: InputMaybe<audio_book_category_inc_input>
  _set?: InputMaybe<audio_book_category_set_input>
  pk_columns: audio_book_category_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_audio_book_tagArgs = {
  _inc?: InputMaybe<audio_book_tag_inc_input>
  _set?: InputMaybe<audio_book_tag_set_input>
  where: audio_book_tag_bool_exp
}

/** mutation root */
export type mutation_rootupdate_audio_book_tag_by_pkArgs = {
  _inc?: InputMaybe<audio_book_tag_inc_input>
  _set?: InputMaybe<audio_book_tag_set_input>
  pk_columns: audio_book_tag_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_categoryArgs = {
  _inc?: InputMaybe<category_inc_input>
  _set?: InputMaybe<category_set_input>
  where: category_bool_exp
}

/** mutation root */
export type mutation_rootupdate_category_by_pkArgs = {
  _inc?: InputMaybe<category_inc_input>
  _set?: InputMaybe<category_set_input>
  pk_columns: category_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_creatorArgs = {
  _set?: InputMaybe<creator_set_input>
  where: creator_bool_exp
}

/** mutation root */
export type mutation_rootupdate_creator_by_pkArgs = {
  _set?: InputMaybe<creator_set_input>
  pk_columns: creator_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_exhibitionArgs = {
  _inc?: InputMaybe<exhibition_inc_input>
  _set?: InputMaybe<exhibition_set_input>
  where: exhibition_bool_exp
}

/** mutation root */
export type mutation_rootupdate_exhibition_artworkArgs = {
  _inc?: InputMaybe<exhibition_artwork_inc_input>
  _set?: InputMaybe<exhibition_artwork_set_input>
  where: exhibition_artwork_bool_exp
}

/** mutation root */
export type mutation_rootupdate_exhibition_artwork_by_pkArgs = {
  _inc?: InputMaybe<exhibition_artwork_inc_input>
  _set?: InputMaybe<exhibition_artwork_set_input>
  pk_columns: exhibition_artwork_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_exhibition_by_pkArgs = {
  _inc?: InputMaybe<exhibition_inc_input>
  _set?: InputMaybe<exhibition_set_input>
  pk_columns: exhibition_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_favoriteArgs = {
  _inc?: InputMaybe<favorite_inc_input>
  _set?: InputMaybe<favorite_set_input>
  where: favorite_bool_exp
}

/** mutation root */
export type mutation_rootupdate_favorite_by_pkArgs = {
  _inc?: InputMaybe<favorite_inc_input>
  _set?: InputMaybe<favorite_set_input>
  pk_columns: favorite_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_memberArgs = {
  _inc?: InputMaybe<member_inc_input>
  _set?: InputMaybe<member_set_input>
  where: member_bool_exp
}

/** mutation root */
export type mutation_rootupdate_member_artwork_collectionArgs = {
  _inc?: InputMaybe<member_artwork_collection_inc_input>
  _set?: InputMaybe<member_artwork_collection_set_input>
  where: member_artwork_collection_bool_exp
}

/** mutation root */
export type mutation_rootupdate_member_artwork_collection_by_pkArgs = {
  _inc?: InputMaybe<member_artwork_collection_inc_input>
  _set?: InputMaybe<member_artwork_collection_set_input>
  pk_columns: member_artwork_collection_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_member_audio_book_collectionArgs = {
  _inc?: InputMaybe<member_audio_book_collection_inc_input>
  _set?: InputMaybe<member_audio_book_collection_set_input>
  where: member_audio_book_collection_bool_exp
}

/** mutation root */
export type mutation_rootupdate_member_audio_book_collection_by_pkArgs = {
  _inc?: InputMaybe<member_audio_book_collection_inc_input>
  _set?: InputMaybe<member_audio_book_collection_set_input>
  pk_columns: member_audio_book_collection_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_member_audio_book_favoriteArgs = {
  _inc?: InputMaybe<member_audio_book_favorite_inc_input>
  _set?: InputMaybe<member_audio_book_favorite_set_input>
  where: member_audio_book_favorite_bool_exp
}

/** mutation root */
export type mutation_rootupdate_member_audio_book_favorite_by_pkArgs = {
  _inc?: InputMaybe<member_audio_book_favorite_inc_input>
  _set?: InputMaybe<member_audio_book_favorite_set_input>
  pk_columns: member_audio_book_favorite_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_member_by_pkArgs = {
  _inc?: InputMaybe<member_inc_input>
  _set?: InputMaybe<member_set_input>
  pk_columns: member_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_museumArgs = {
  _inc?: InputMaybe<museum_inc_input>
  _set?: InputMaybe<museum_set_input>
  where: museum_bool_exp
}

/** mutation root */
export type mutation_rootupdate_museum_by_pkArgs = {
  _inc?: InputMaybe<museum_inc_input>
  _set?: InputMaybe<museum_set_input>
  pk_columns: museum_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_playlistArgs = {
  _inc?: InputMaybe<playlist_inc_input>
  _set?: InputMaybe<playlist_set_input>
  where: playlist_bool_exp
}

/** mutation root */
export type mutation_rootupdate_playlist_by_pkArgs = {
  _inc?: InputMaybe<playlist_inc_input>
  _set?: InputMaybe<playlist_set_input>
  pk_columns: playlist_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_playlist_itemArgs = {
  _inc?: InputMaybe<playlist_item_inc_input>
  _set?: InputMaybe<playlist_item_set_input>
  where: playlist_item_bool_exp
}

/** mutation root */
export type mutation_rootupdate_playlist_item_by_pkArgs = {
  _inc?: InputMaybe<playlist_item_inc_input>
  _set?: InputMaybe<playlist_item_set_input>
  pk_columns: playlist_item_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_reviewArgs = {
  _inc?: InputMaybe<review_inc_input>
  _set?: InputMaybe<review_set_input>
  where: review_bool_exp
}

/** mutation root */
export type mutation_rootupdate_review_by_pkArgs = {
  _inc?: InputMaybe<review_inc_input>
  _set?: InputMaybe<review_set_input>
  pk_columns: review_pk_columns_input
}

/** mutation root */
export type mutation_rootupdate_tagArgs = {
  _inc?: InputMaybe<tag_inc_input>
  _set?: InputMaybe<tag_set_input>
  where: tag_bool_exp
}

/** mutation root */
export type mutation_rootupdate_tag_by_pkArgs = {
  _inc?: InputMaybe<tag_inc_input>
  _set?: InputMaybe<tag_set_input>
  pk_columns: tag_pk_columns_input
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type numeric_comparison_exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/**
 * usge of adding playlist
 *
 *
 * columns and relationships of "playlist"
 *
 */
export type playlist = {
  __typename: 'playlist'
  exhibition_detail: Maybe<Scalars['String']>
  exhibition_name: Maybe<Scalars['String']>
  id: Scalars['bigint']
  /** An object relationship */
  member: member
  member_id: Scalars['bigint']
  /** An array relationship */
  playlist_items: Array<playlist_item>
  /** An aggregate relationship */
  playlist_items_aggregate: playlist_item_aggregate
}

/**
 * usge of adding playlist
 *
 *
 * columns and relationships of "playlist"
 *
 */
export type playlistplaylist_itemsArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

/**
 * usge of adding playlist
 *
 *
 * columns and relationships of "playlist"
 *
 */
export type playlistplaylist_items_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

/** aggregated selection of "playlist" */
export type playlist_aggregate = {
  __typename: 'playlist_aggregate'
  aggregate: Maybe<playlist_aggregate_fields>
  nodes: Array<playlist>
}

/** aggregate fields of "playlist" */
export type playlist_aggregate_fields = {
  __typename: 'playlist_aggregate_fields'
  avg: Maybe<playlist_avg_fields>
  count: Scalars['Int']
  max: Maybe<playlist_max_fields>
  min: Maybe<playlist_min_fields>
  stddev: Maybe<playlist_stddev_fields>
  stddev_pop: Maybe<playlist_stddev_pop_fields>
  stddev_samp: Maybe<playlist_stddev_samp_fields>
  sum: Maybe<playlist_sum_fields>
  var_pop: Maybe<playlist_var_pop_fields>
  var_samp: Maybe<playlist_var_samp_fields>
  variance: Maybe<playlist_variance_fields>
}

/** aggregate fields of "playlist" */
export type playlist_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<playlist_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "playlist" */
export type playlist_aggregate_order_by = {
  avg?: InputMaybe<playlist_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<playlist_max_order_by>
  min?: InputMaybe<playlist_min_order_by>
  stddev?: InputMaybe<playlist_stddev_order_by>
  stddev_pop?: InputMaybe<playlist_stddev_pop_order_by>
  stddev_samp?: InputMaybe<playlist_stddev_samp_order_by>
  sum?: InputMaybe<playlist_sum_order_by>
  var_pop?: InputMaybe<playlist_var_pop_order_by>
  var_samp?: InputMaybe<playlist_var_samp_order_by>
  variance?: InputMaybe<playlist_variance_order_by>
}

/** input type for inserting array relation for remote table "playlist" */
export type playlist_arr_rel_insert_input = {
  data: Array<playlist_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<playlist_on_conflict>
}

/** aggregate avg on columns */
export type playlist_avg_fields = {
  __typename: 'playlist_avg_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "playlist" */
export type playlist_avg_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "playlist". All fields are combined with a logical 'AND'. */
export type playlist_bool_exp = {
  _and?: InputMaybe<Array<playlist_bool_exp>>
  _not?: InputMaybe<playlist_bool_exp>
  _or?: InputMaybe<Array<playlist_bool_exp>>
  exhibition_detail?: InputMaybe<String_comparison_exp>
  exhibition_name?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
  playlist_items?: InputMaybe<playlist_item_bool_exp>
}

/** unique or primary key constraints on table "playlist" */
export enum playlist_constraint {
  /** unique or primary key constraint */
  PlayList_pkey = 'PlayList_pkey',
}

/** input type for incrementing numeric columns in table "playlist" */
export type playlist_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "playlist" */
export type playlist_insert_input = {
  exhibition_detail?: InputMaybe<Scalars['String']>
  exhibition_name?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['bigint']>
  playlist_items?: InputMaybe<playlist_item_arr_rel_insert_input>
}

/** columns and relationships of "playlist_item" */
export type playlist_item = {
  __typename: 'playlist_item'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  id: Scalars['bigint']
  /** An object relationship */
  playlist: playlist
  playlist_id: Scalars['bigint']
}

/** aggregated selection of "playlist_item" */
export type playlist_item_aggregate = {
  __typename: 'playlist_item_aggregate'
  aggregate: Maybe<playlist_item_aggregate_fields>
  nodes: Array<playlist_item>
}

/** aggregate fields of "playlist_item" */
export type playlist_item_aggregate_fields = {
  __typename: 'playlist_item_aggregate_fields'
  avg: Maybe<playlist_item_avg_fields>
  count: Scalars['Int']
  max: Maybe<playlist_item_max_fields>
  min: Maybe<playlist_item_min_fields>
  stddev: Maybe<playlist_item_stddev_fields>
  stddev_pop: Maybe<playlist_item_stddev_pop_fields>
  stddev_samp: Maybe<playlist_item_stddev_samp_fields>
  sum: Maybe<playlist_item_sum_fields>
  var_pop: Maybe<playlist_item_var_pop_fields>
  var_samp: Maybe<playlist_item_var_samp_fields>
  variance: Maybe<playlist_item_variance_fields>
}

/** aggregate fields of "playlist_item" */
export type playlist_item_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<playlist_item_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "playlist_item" */
export type playlist_item_aggregate_order_by = {
  avg?: InputMaybe<playlist_item_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<playlist_item_max_order_by>
  min?: InputMaybe<playlist_item_min_order_by>
  stddev?: InputMaybe<playlist_item_stddev_order_by>
  stddev_pop?: InputMaybe<playlist_item_stddev_pop_order_by>
  stddev_samp?: InputMaybe<playlist_item_stddev_samp_order_by>
  sum?: InputMaybe<playlist_item_sum_order_by>
  var_pop?: InputMaybe<playlist_item_var_pop_order_by>
  var_samp?: InputMaybe<playlist_item_var_samp_order_by>
  variance?: InputMaybe<playlist_item_variance_order_by>
}

/** input type for inserting array relation for remote table "playlist_item" */
export type playlist_item_arr_rel_insert_input = {
  data: Array<playlist_item_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<playlist_item_on_conflict>
}

/** aggregate avg on columns */
export type playlist_item_avg_fields = {
  __typename: 'playlist_item_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "playlist_item" */
export type playlist_item_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "playlist_item". All fields are combined with a logical 'AND'. */
export type playlist_item_bool_exp = {
  _and?: InputMaybe<Array<playlist_item_bool_exp>>
  _not?: InputMaybe<playlist_item_bool_exp>
  _or?: InputMaybe<Array<playlist_item_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  playlist?: InputMaybe<playlist_bool_exp>
  playlist_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "playlist_item" */
export enum playlist_item_constraint {
  /** unique or primary key constraint */
  PlayListItem_pkey = 'PlayListItem_pkey',
}

/** input type for incrementing numeric columns in table "playlist_item" */
export type playlist_item_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  playlist_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "playlist_item" */
export type playlist_item_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  playlist?: InputMaybe<playlist_obj_rel_insert_input>
  playlist_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type playlist_item_max_fields = {
  __typename: 'playlist_item_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  playlist_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "playlist_item" */
export type playlist_item_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type playlist_item_min_fields = {
  __typename: 'playlist_item_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  playlist_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "playlist_item" */
export type playlist_item_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "playlist_item" */
export type playlist_item_mutation_response = {
  __typename: 'playlist_item_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<playlist_item>
}

/** on conflict condition type for table "playlist_item" */
export type playlist_item_on_conflict = {
  constraint: playlist_item_constraint
  update_columns?: Array<playlist_item_update_column>
  where?: InputMaybe<playlist_item_bool_exp>
}

/** Ordering options when selecting data from "playlist_item". */
export type playlist_item_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist?: InputMaybe<playlist_order_by>
  playlist_id?: InputMaybe<order_by>
}

/** primary key columns input for table: playlist_item */
export type playlist_item_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "playlist_item" */
export enum playlist_item_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  id = 'id',
  /** column name */
  playlist_id = 'playlist_id',
}

/** input type for updating data in table "playlist_item" */
export type playlist_item_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  playlist_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type playlist_item_stddev_fields = {
  __typename: 'playlist_item_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "playlist_item" */
export type playlist_item_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type playlist_item_stddev_pop_fields = {
  __typename: 'playlist_item_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "playlist_item" */
export type playlist_item_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type playlist_item_stddev_samp_fields = {
  __typename: 'playlist_item_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "playlist_item" */
export type playlist_item_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type playlist_item_sum_fields = {
  __typename: 'playlist_item_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  playlist_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "playlist_item" */
export type playlist_item_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** update columns of table "playlist_item" */
export enum playlist_item_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  id = 'id',
  /** column name */
  playlist_id = 'playlist_id',
}

/** aggregate var_pop on columns */
export type playlist_item_var_pop_fields = {
  __typename: 'playlist_item_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "playlist_item" */
export type playlist_item_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type playlist_item_var_samp_fields = {
  __typename: 'playlist_item_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "playlist_item" */
export type playlist_item_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type playlist_item_variance_fields = {
  __typename: 'playlist_item_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  playlist_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "playlist_item" */
export type playlist_item_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  playlist_id?: InputMaybe<order_by>
}

/** aggregate max on columns */
export type playlist_max_fields = {
  __typename: 'playlist_max_fields'
  exhibition_detail: Maybe<Scalars['String']>
  exhibition_name: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "playlist" */
export type playlist_max_order_by = {
  exhibition_detail?: InputMaybe<order_by>
  exhibition_name?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type playlist_min_fields = {
  __typename: 'playlist_min_fields'
  exhibition_detail: Maybe<Scalars['String']>
  exhibition_name: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "playlist" */
export type playlist_min_order_by = {
  exhibition_detail?: InputMaybe<order_by>
  exhibition_name?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "playlist" */
export type playlist_mutation_response = {
  __typename: 'playlist_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<playlist>
}

/** input type for inserting object relation for remote table "playlist" */
export type playlist_obj_rel_insert_input = {
  data: playlist_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<playlist_on_conflict>
}

/** on conflict condition type for table "playlist" */
export type playlist_on_conflict = {
  constraint: playlist_constraint
  update_columns?: Array<playlist_update_column>
  where?: InputMaybe<playlist_bool_exp>
}

/** Ordering options when selecting data from "playlist". */
export type playlist_order_by = {
  exhibition_detail?: InputMaybe<order_by>
  exhibition_name?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
  playlist_items_aggregate?: InputMaybe<playlist_item_aggregate_order_by>
}

/** primary key columns input for table: playlist */
export type playlist_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "playlist" */
export enum playlist_select_column {
  /** column name */
  exhibition_detail = 'exhibition_detail',
  /** column name */
  exhibition_name = 'exhibition_name',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "playlist" */
export type playlist_set_input = {
  exhibition_detail?: InputMaybe<Scalars['String']>
  exhibition_name?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type playlist_stddev_fields = {
  __typename: 'playlist_stddev_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "playlist" */
export type playlist_stddev_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type playlist_stddev_pop_fields = {
  __typename: 'playlist_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "playlist" */
export type playlist_stddev_pop_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type playlist_stddev_samp_fields = {
  __typename: 'playlist_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "playlist" */
export type playlist_stddev_samp_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type playlist_sum_fields = {
  __typename: 'playlist_sum_fields'
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "playlist" */
export type playlist_sum_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "playlist" */
export enum playlist_update_column {
  /** column name */
  exhibition_detail = 'exhibition_detail',
  /** column name */
  exhibition_name = 'exhibition_name',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type playlist_var_pop_fields = {
  __typename: 'playlist_var_pop_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "playlist" */
export type playlist_var_pop_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type playlist_var_samp_fields = {
  __typename: 'playlist_var_samp_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "playlist" */
export type playlist_var_samp_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type playlist_variance_fields = {
  __typename: 'playlist_variance_fields'
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "playlist" */
export type playlist_variance_order_by = {
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

export type query_root = {
  __typename: 'query_root'
  /** fetch data from the table: "artwork" */
  artwork: Array<artwork>
  /** fetch aggregated fields from the table: "artwork" */
  artwork_aggregate: artwork_aggregate
  /** fetch data from the table: "artwork" using primary key columns */
  artwork_by_pk: Maybe<artwork>
  /** fetch data from the table: "artwork_comment" */
  artwork_comment: Array<artwork_comment>
  /** fetch aggregated fields from the table: "artwork_comment" */
  artwork_comment_aggregate: artwork_comment_aggregate
  /** fetch data from the table: "artwork_comment" using primary key columns */
  artwork_comment_by_pk: Maybe<artwork_comment>
  /** fetch data from the table: "audio_book" */
  audio_book: Array<audio_book>
  /** fetch aggregated fields from the table: "audio_book" */
  audio_book_aggregate: audio_book_aggregate
  /** fetch data from the table: "audio_book" using primary key columns */
  audio_book_by_pk: Maybe<audio_book>
  /** fetch data from the table: "audio_book_category" */
  audio_book_category: Array<audio_book_category>
  /** fetch aggregated fields from the table: "audio_book_category" */
  audio_book_category_aggregate: audio_book_category_aggregate
  /** fetch data from the table: "audio_book_category" using primary key columns */
  audio_book_category_by_pk: Maybe<audio_book_category>
  /** fetch data from the table: "audio_book_tag" */
  audio_book_tag: Array<audio_book_tag>
  /** fetch aggregated fields from the table: "audio_book_tag" */
  audio_book_tag_aggregate: audio_book_tag_aggregate
  /** fetch data from the table: "audio_book_tag" using primary key columns */
  audio_book_tag_by_pk: Maybe<audio_book_tag>
  /** fetch data from the table: "category" */
  category: Array<category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: category_aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk: Maybe<category>
  /** fetch data from the table: "creator" */
  creator: Array<creator>
  /** fetch aggregated fields from the table: "creator" */
  creator_aggregate: creator_aggregate
  /** fetch data from the table: "creator" using primary key columns */
  creator_by_pk: Maybe<creator>
  /** fetch data from the table: "exhibition" */
  exhibition: Array<exhibition>
  /** fetch aggregated fields from the table: "exhibition" */
  exhibition_aggregate: exhibition_aggregate
  /** fetch data from the table: "exhibition_artwork" */
  exhibition_artwork: Array<exhibition_artwork>
  /** fetch aggregated fields from the table: "exhibition_artwork" */
  exhibition_artwork_aggregate: exhibition_artwork_aggregate
  /** fetch data from the table: "exhibition_artwork" using primary key columns */
  exhibition_artwork_by_pk: Maybe<exhibition_artwork>
  /** fetch data from the table: "exhibition" using primary key columns */
  exhibition_by_pk: Maybe<exhibition>
  /** fetch data from the table: "favorite" */
  favorite: Array<favorite>
  /** fetch aggregated fields from the table: "favorite" */
  favorite_aggregate: favorite_aggregate
  /** fetch data from the table: "favorite" using primary key columns */
  favorite_by_pk: Maybe<favorite>
  /** fetch data from the table: "member" */
  member: Array<member>
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: member_aggregate
  /** fetch data from the table: "member_artwork_collection" */
  member_artwork_collection: Array<member_artwork_collection>
  /** fetch aggregated fields from the table: "member_artwork_collection" */
  member_artwork_collection_aggregate: member_artwork_collection_aggregate
  /** fetch data from the table: "member_artwork_collection" using primary key columns */
  member_artwork_collection_by_pk: Maybe<member_artwork_collection>
  /** fetch data from the table: "member_audio_book_collection" */
  member_audio_book_collection: Array<member_audio_book_collection>
  /** fetch aggregated fields from the table: "member_audio_book_collection" */
  member_audio_book_collection_aggregate: member_audio_book_collection_aggregate
  /** fetch data from the table: "member_audio_book_collection" using primary key columns */
  member_audio_book_collection_by_pk: Maybe<member_audio_book_collection>
  /** fetch data from the table: "member_audio_book_favorite" */
  member_audio_book_favorite: Array<member_audio_book_favorite>
  /** fetch aggregated fields from the table: "member_audio_book_favorite" */
  member_audio_book_favorite_aggregate: member_audio_book_favorite_aggregate
  /** fetch data from the table: "member_audio_book_favorite" using primary key columns */
  member_audio_book_favorite_by_pk: Maybe<member_audio_book_favorite>
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk: Maybe<member>
  /** fetch data from the table: "museum" */
  museum: Array<museum>
  /** fetch aggregated fields from the table: "museum" */
  museum_aggregate: museum_aggregate
  /** fetch data from the table: "museum" using primary key columns */
  museum_by_pk: Maybe<museum>
  /** fetch data from the table: "playlist" */
  playlist: Array<playlist>
  /** fetch aggregated fields from the table: "playlist" */
  playlist_aggregate: playlist_aggregate
  /** fetch data from the table: "playlist" using primary key columns */
  playlist_by_pk: Maybe<playlist>
  /** fetch data from the table: "playlist_item" */
  playlist_item: Array<playlist_item>
  /** fetch aggregated fields from the table: "playlist_item" */
  playlist_item_aggregate: playlist_item_aggregate
  /** fetch data from the table: "playlist_item" using primary key columns */
  playlist_item_by_pk: Maybe<playlist_item>
  /** fetch data from the table: "review" */
  review: Array<review>
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: review_aggregate
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk: Maybe<review>
  /** fetch data from the table: "tag" */
  tag: Array<tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: tag_aggregate
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk: Maybe<tag>
}

export type query_rootartworkArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

export type query_rootartwork_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

export type query_rootartwork_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootartwork_commentArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

export type query_rootartwork_comment_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

export type query_rootartwork_comment_by_pkArgs = {
  id: Scalars['Int']
}

export type query_rootaudio_bookArgs = {
  distinct_on?: InputMaybe<Array<audio_book_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_order_by>>
  where?: InputMaybe<audio_book_bool_exp>
}

export type query_rootaudio_book_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_order_by>>
  where?: InputMaybe<audio_book_bool_exp>
}

export type query_rootaudio_book_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootaudio_book_categoryArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

export type query_rootaudio_book_category_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

export type query_rootaudio_book_category_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  category_id: Scalars['bigint']
}

export type query_rootaudio_book_tagArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

export type query_rootaudio_book_tag_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

export type query_rootaudio_book_tag_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  tag_id: Scalars['bigint']
}

export type query_rootcategoryArgs = {
  distinct_on?: InputMaybe<Array<category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<category_order_by>>
  where?: InputMaybe<category_bool_exp>
}

export type query_rootcategory_aggregateArgs = {
  distinct_on?: InputMaybe<Array<category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<category_order_by>>
  where?: InputMaybe<category_bool_exp>
}

export type query_rootcategory_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootcreatorArgs = {
  distinct_on?: InputMaybe<Array<creator_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<creator_order_by>>
  where?: InputMaybe<creator_bool_exp>
}

export type query_rootcreator_aggregateArgs = {
  distinct_on?: InputMaybe<Array<creator_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<creator_order_by>>
  where?: InputMaybe<creator_bool_exp>
}

export type query_rootcreator_by_pkArgs = {
  id: Scalars['uuid']
}

export type query_rootexhibitionArgs = {
  distinct_on?: InputMaybe<Array<exhibition_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_order_by>>
  where?: InputMaybe<exhibition_bool_exp>
}

export type query_rootexhibition_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_order_by>>
  where?: InputMaybe<exhibition_bool_exp>
}

export type query_rootexhibition_artworkArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

export type query_rootexhibition_artwork_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

export type query_rootexhibition_artwork_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootexhibition_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootfavoriteArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

export type query_rootfavorite_aggregateArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

export type query_rootfavorite_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootmemberArgs = {
  distinct_on?: InputMaybe<Array<member_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_order_by>>
  where?: InputMaybe<member_bool_exp>
}

export type query_rootmember_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_order_by>>
  where?: InputMaybe<member_bool_exp>
}

export type query_rootmember_artwork_collectionArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

export type query_rootmember_artwork_collection_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

export type query_rootmember_artwork_collection_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootmember_audio_book_collectionArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

export type query_rootmember_audio_book_collection_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

export type query_rootmember_audio_book_collection_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootmember_audio_book_favoriteArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

export type query_rootmember_audio_book_favorite_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

export type query_rootmember_audio_book_favorite_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootmember_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootmuseumArgs = {
  distinct_on?: InputMaybe<Array<museum_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<museum_order_by>>
  where?: InputMaybe<museum_bool_exp>
}

export type query_rootmuseum_aggregateArgs = {
  distinct_on?: InputMaybe<Array<museum_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<museum_order_by>>
  where?: InputMaybe<museum_bool_exp>
}

export type query_rootmuseum_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootplaylistArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

export type query_rootplaylist_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

export type query_rootplaylist_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootplaylist_itemArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

export type query_rootplaylist_item_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

export type query_rootplaylist_item_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_rootreviewArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

export type query_rootreview_aggregateArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

export type query_rootreview_by_pkArgs = {
  id: Scalars['bigint']
}

export type query_roottagArgs = {
  distinct_on?: InputMaybe<Array<tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<tag_order_by>>
  where?: InputMaybe<tag_bool_exp>
}

export type query_roottag_aggregateArgs = {
  distinct_on?: InputMaybe<Array<tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<tag_order_by>>
  where?: InputMaybe<tag_bool_exp>
}

export type query_roottag_by_pkArgs = {
  id: Scalars['bigint']
}

/** columns and relationships of "review" */
export type review = {
  __typename: 'review'
  /** An object relationship */
  artwork: artwork
  artwork_id: Scalars['bigint']
  feedback: Maybe<Scalars['String']>
  id: Scalars['bigint']
  /** An object relationship */
  member: member
  member_id: Scalars['bigint']
}

/** aggregated selection of "review" */
export type review_aggregate = {
  __typename: 'review_aggregate'
  aggregate: Maybe<review_aggregate_fields>
  nodes: Array<review>
}

/** aggregate fields of "review" */
export type review_aggregate_fields = {
  __typename: 'review_aggregate_fields'
  avg: Maybe<review_avg_fields>
  count: Scalars['Int']
  max: Maybe<review_max_fields>
  min: Maybe<review_min_fields>
  stddev: Maybe<review_stddev_fields>
  stddev_pop: Maybe<review_stddev_pop_fields>
  stddev_samp: Maybe<review_stddev_samp_fields>
  sum: Maybe<review_sum_fields>
  var_pop: Maybe<review_var_pop_fields>
  var_samp: Maybe<review_var_samp_fields>
  variance: Maybe<review_variance_fields>
}

/** aggregate fields of "review" */
export type review_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<review_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "review" */
export type review_aggregate_order_by = {
  avg?: InputMaybe<review_avg_order_by>
  count?: InputMaybe<order_by>
  max?: InputMaybe<review_max_order_by>
  min?: InputMaybe<review_min_order_by>
  stddev?: InputMaybe<review_stddev_order_by>
  stddev_pop?: InputMaybe<review_stddev_pop_order_by>
  stddev_samp?: InputMaybe<review_stddev_samp_order_by>
  sum?: InputMaybe<review_sum_order_by>
  var_pop?: InputMaybe<review_var_pop_order_by>
  var_samp?: InputMaybe<review_var_samp_order_by>
  variance?: InputMaybe<review_variance_order_by>
}

/** input type for inserting array relation for remote table "review" */
export type review_arr_rel_insert_input = {
  data: Array<review_insert_input>
  /** on conflict condition */
  on_conflict?: InputMaybe<review_on_conflict>
}

/** aggregate avg on columns */
export type review_avg_fields = {
  __typename: 'review_avg_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "review" */
export type review_avg_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type review_bool_exp = {
  _and?: InputMaybe<Array<review_bool_exp>>
  _not?: InputMaybe<review_bool_exp>
  _or?: InputMaybe<Array<review_bool_exp>>
  artwork?: InputMaybe<artwork_bool_exp>
  artwork_id?: InputMaybe<bigint_comparison_exp>
  feedback?: InputMaybe<String_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  member?: InputMaybe<member_bool_exp>
  member_id?: InputMaybe<bigint_comparison_exp>
}

/** unique or primary key constraints on table "review" */
export enum review_constraint {
  /** unique or primary key constraint */
  comment_item_pkey = 'comment_item_pkey',
}

/** input type for incrementing numeric columns in table "review" */
export type review_inc_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "review" */
export type review_insert_input = {
  artwork?: InputMaybe<artwork_obj_rel_insert_input>
  artwork_id?: InputMaybe<Scalars['bigint']>
  feedback?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  member?: InputMaybe<member_obj_rel_insert_input>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type review_max_fields = {
  __typename: 'review_max_fields'
  artwork_id: Maybe<Scalars['bigint']>
  feedback: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "review" */
export type review_max_order_by = {
  artwork_id?: InputMaybe<order_by>
  feedback?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate min on columns */
export type review_min_fields = {
  __typename: 'review_min_fields'
  artwork_id: Maybe<Scalars['bigint']>
  feedback: Maybe<Scalars['String']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "review" */
export type review_min_order_by = {
  artwork_id?: InputMaybe<order_by>
  feedback?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** response of any mutation on the table "review" */
export type review_mutation_response = {
  __typename: 'review_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<review>
}

/** on conflict condition type for table "review" */
export type review_on_conflict = {
  constraint: review_constraint
  update_columns?: Array<review_update_column>
  where?: InputMaybe<review_bool_exp>
}

/** Ordering options when selecting data from "review". */
export type review_order_by = {
  artwork?: InputMaybe<artwork_order_by>
  artwork_id?: InputMaybe<order_by>
  feedback?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member?: InputMaybe<member_order_by>
  member_id?: InputMaybe<order_by>
}

/** primary key columns input for table: review */
export type review_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "review" */
export enum review_select_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  feedback = 'feedback',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** input type for updating data in table "review" */
export type review_set_input = {
  artwork_id?: InputMaybe<Scalars['bigint']>
  feedback?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['bigint']>
  member_id?: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type review_stddev_fields = {
  __typename: 'review_stddev_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "review" */
export type review_stddev_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_pop on columns */
export type review_stddev_pop_fields = {
  __typename: 'review_stddev_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "review" */
export type review_stddev_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate stddev_samp on columns */
export type review_stddev_samp_fields = {
  __typename: 'review_stddev_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "review" */
export type review_stddev_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate sum on columns */
export type review_sum_fields = {
  __typename: 'review_sum_fields'
  artwork_id: Maybe<Scalars['bigint']>
  id: Maybe<Scalars['bigint']>
  member_id: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "review" */
export type review_sum_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** update columns of table "review" */
export enum review_update_column {
  /** column name */
  artwork_id = 'artwork_id',
  /** column name */
  feedback = 'feedback',
  /** column name */
  id = 'id',
  /** column name */
  member_id = 'member_id',
}

/** aggregate var_pop on columns */
export type review_var_pop_fields = {
  __typename: 'review_var_pop_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "review" */
export type review_var_pop_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate var_samp on columns */
export type review_var_samp_fields = {
  __typename: 'review_var_samp_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "review" */
export type review_var_samp_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

/** aggregate variance on columns */
export type review_variance_fields = {
  __typename: 'review_variance_fields'
  artwork_id: Maybe<Scalars['Float']>
  id: Maybe<Scalars['Float']>
  member_id: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "review" */
export type review_variance_order_by = {
  artwork_id?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  member_id?: InputMaybe<order_by>
}

export type subscription_root = {
  __typename: 'subscription_root'
  /** fetch data from the table: "artwork" */
  artwork: Array<artwork>
  /** fetch aggregated fields from the table: "artwork" */
  artwork_aggregate: artwork_aggregate
  /** fetch data from the table: "artwork" using primary key columns */
  artwork_by_pk: Maybe<artwork>
  /** fetch data from the table: "artwork_comment" */
  artwork_comment: Array<artwork_comment>
  /** fetch aggregated fields from the table: "artwork_comment" */
  artwork_comment_aggregate: artwork_comment_aggregate
  /** fetch data from the table: "artwork_comment" using primary key columns */
  artwork_comment_by_pk: Maybe<artwork_comment>
  /** fetch data from the table: "audio_book" */
  audio_book: Array<audio_book>
  /** fetch aggregated fields from the table: "audio_book" */
  audio_book_aggregate: audio_book_aggregate
  /** fetch data from the table: "audio_book" using primary key columns */
  audio_book_by_pk: Maybe<audio_book>
  /** fetch data from the table: "audio_book_category" */
  audio_book_category: Array<audio_book_category>
  /** fetch aggregated fields from the table: "audio_book_category" */
  audio_book_category_aggregate: audio_book_category_aggregate
  /** fetch data from the table: "audio_book_category" using primary key columns */
  audio_book_category_by_pk: Maybe<audio_book_category>
  /** fetch data from the table: "audio_book_tag" */
  audio_book_tag: Array<audio_book_tag>
  /** fetch aggregated fields from the table: "audio_book_tag" */
  audio_book_tag_aggregate: audio_book_tag_aggregate
  /** fetch data from the table: "audio_book_tag" using primary key columns */
  audio_book_tag_by_pk: Maybe<audio_book_tag>
  /** fetch data from the table: "category" */
  category: Array<category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: category_aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk: Maybe<category>
  /** fetch data from the table: "creator" */
  creator: Array<creator>
  /** fetch aggregated fields from the table: "creator" */
  creator_aggregate: creator_aggregate
  /** fetch data from the table: "creator" using primary key columns */
  creator_by_pk: Maybe<creator>
  /** fetch data from the table: "exhibition" */
  exhibition: Array<exhibition>
  /** fetch aggregated fields from the table: "exhibition" */
  exhibition_aggregate: exhibition_aggregate
  /** fetch data from the table: "exhibition_artwork" */
  exhibition_artwork: Array<exhibition_artwork>
  /** fetch aggregated fields from the table: "exhibition_artwork" */
  exhibition_artwork_aggregate: exhibition_artwork_aggregate
  /** fetch data from the table: "exhibition_artwork" using primary key columns */
  exhibition_artwork_by_pk: Maybe<exhibition_artwork>
  /** fetch data from the table: "exhibition" using primary key columns */
  exhibition_by_pk: Maybe<exhibition>
  /** fetch data from the table: "favorite" */
  favorite: Array<favorite>
  /** fetch aggregated fields from the table: "favorite" */
  favorite_aggregate: favorite_aggregate
  /** fetch data from the table: "favorite" using primary key columns */
  favorite_by_pk: Maybe<favorite>
  /** fetch data from the table: "member" */
  member: Array<member>
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: member_aggregate
  /** fetch data from the table: "member_artwork_collection" */
  member_artwork_collection: Array<member_artwork_collection>
  /** fetch aggregated fields from the table: "member_artwork_collection" */
  member_artwork_collection_aggregate: member_artwork_collection_aggregate
  /** fetch data from the table: "member_artwork_collection" using primary key columns */
  member_artwork_collection_by_pk: Maybe<member_artwork_collection>
  /** fetch data from the table: "member_audio_book_collection" */
  member_audio_book_collection: Array<member_audio_book_collection>
  /** fetch aggregated fields from the table: "member_audio_book_collection" */
  member_audio_book_collection_aggregate: member_audio_book_collection_aggregate
  /** fetch data from the table: "member_audio_book_collection" using primary key columns */
  member_audio_book_collection_by_pk: Maybe<member_audio_book_collection>
  /** fetch data from the table: "member_audio_book_favorite" */
  member_audio_book_favorite: Array<member_audio_book_favorite>
  /** fetch aggregated fields from the table: "member_audio_book_favorite" */
  member_audio_book_favorite_aggregate: member_audio_book_favorite_aggregate
  /** fetch data from the table: "member_audio_book_favorite" using primary key columns */
  member_audio_book_favorite_by_pk: Maybe<member_audio_book_favorite>
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk: Maybe<member>
  /** fetch data from the table: "museum" */
  museum: Array<museum>
  /** fetch aggregated fields from the table: "museum" */
  museum_aggregate: museum_aggregate
  /** fetch data from the table: "museum" using primary key columns */
  museum_by_pk: Maybe<museum>
  /** fetch data from the table: "playlist" */
  playlist: Array<playlist>
  /** fetch aggregated fields from the table: "playlist" */
  playlist_aggregate: playlist_aggregate
  /** fetch data from the table: "playlist" using primary key columns */
  playlist_by_pk: Maybe<playlist>
  /** fetch data from the table: "playlist_item" */
  playlist_item: Array<playlist_item>
  /** fetch aggregated fields from the table: "playlist_item" */
  playlist_item_aggregate: playlist_item_aggregate
  /** fetch data from the table: "playlist_item" using primary key columns */
  playlist_item_by_pk: Maybe<playlist_item>
  /** fetch data from the table: "review" */
  review: Array<review>
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: review_aggregate
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk: Maybe<review>
  /** fetch data from the table: "tag" */
  tag: Array<tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: tag_aggregate
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk: Maybe<tag>
}

export type subscription_rootartworkArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

export type subscription_rootartwork_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_order_by>>
  where?: InputMaybe<artwork_bool_exp>
}

export type subscription_rootartwork_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootartwork_commentArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

export type subscription_rootartwork_comment_aggregateArgs = {
  distinct_on?: InputMaybe<Array<artwork_comment_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<artwork_comment_order_by>>
  where?: InputMaybe<artwork_comment_bool_exp>
}

export type subscription_rootartwork_comment_by_pkArgs = {
  id: Scalars['Int']
}

export type subscription_rootaudio_bookArgs = {
  distinct_on?: InputMaybe<Array<audio_book_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_order_by>>
  where?: InputMaybe<audio_book_bool_exp>
}

export type subscription_rootaudio_book_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_order_by>>
  where?: InputMaybe<audio_book_bool_exp>
}

export type subscription_rootaudio_book_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootaudio_book_categoryArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

export type subscription_rootaudio_book_category_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_category_order_by>>
  where?: InputMaybe<audio_book_category_bool_exp>
}

export type subscription_rootaudio_book_category_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  category_id: Scalars['bigint']
}

export type subscription_rootaudio_book_tagArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

export type subscription_rootaudio_book_tag_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

export type subscription_rootaudio_book_tag_by_pkArgs = {
  audio_book_id: Scalars['bigint']
  tag_id: Scalars['bigint']
}

export type subscription_rootcategoryArgs = {
  distinct_on?: InputMaybe<Array<category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<category_order_by>>
  where?: InputMaybe<category_bool_exp>
}

export type subscription_rootcategory_aggregateArgs = {
  distinct_on?: InputMaybe<Array<category_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<category_order_by>>
  where?: InputMaybe<category_bool_exp>
}

export type subscription_rootcategory_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootcreatorArgs = {
  distinct_on?: InputMaybe<Array<creator_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<creator_order_by>>
  where?: InputMaybe<creator_bool_exp>
}

export type subscription_rootcreator_aggregateArgs = {
  distinct_on?: InputMaybe<Array<creator_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<creator_order_by>>
  where?: InputMaybe<creator_bool_exp>
}

export type subscription_rootcreator_by_pkArgs = {
  id: Scalars['uuid']
}

export type subscription_rootexhibitionArgs = {
  distinct_on?: InputMaybe<Array<exhibition_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_order_by>>
  where?: InputMaybe<exhibition_bool_exp>
}

export type subscription_rootexhibition_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_order_by>>
  where?: InputMaybe<exhibition_bool_exp>
}

export type subscription_rootexhibition_artworkArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

export type subscription_rootexhibition_artwork_aggregateArgs = {
  distinct_on?: InputMaybe<Array<exhibition_artwork_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<exhibition_artwork_order_by>>
  where?: InputMaybe<exhibition_artwork_bool_exp>
}

export type subscription_rootexhibition_artwork_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootexhibition_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootfavoriteArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

export type subscription_rootfavorite_aggregateArgs = {
  distinct_on?: InputMaybe<Array<favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<favorite_order_by>>
  where?: InputMaybe<favorite_bool_exp>
}

export type subscription_rootfavorite_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootmemberArgs = {
  distinct_on?: InputMaybe<Array<member_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_order_by>>
  where?: InputMaybe<member_bool_exp>
}

export type subscription_rootmember_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_order_by>>
  where?: InputMaybe<member_bool_exp>
}

export type subscription_rootmember_artwork_collectionArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

export type subscription_rootmember_artwork_collection_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_artwork_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_artwork_collection_order_by>>
  where?: InputMaybe<member_artwork_collection_bool_exp>
}

export type subscription_rootmember_artwork_collection_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootmember_audio_book_collectionArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

export type subscription_rootmember_audio_book_collection_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_collection_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_collection_order_by>>
  where?: InputMaybe<member_audio_book_collection_bool_exp>
}

export type subscription_rootmember_audio_book_collection_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootmember_audio_book_favoriteArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

export type subscription_rootmember_audio_book_favorite_aggregateArgs = {
  distinct_on?: InputMaybe<Array<member_audio_book_favorite_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<member_audio_book_favorite_order_by>>
  where?: InputMaybe<member_audio_book_favorite_bool_exp>
}

export type subscription_rootmember_audio_book_favorite_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootmember_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootmuseumArgs = {
  distinct_on?: InputMaybe<Array<museum_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<museum_order_by>>
  where?: InputMaybe<museum_bool_exp>
}

export type subscription_rootmuseum_aggregateArgs = {
  distinct_on?: InputMaybe<Array<museum_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<museum_order_by>>
  where?: InputMaybe<museum_bool_exp>
}

export type subscription_rootmuseum_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootplaylistArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

export type subscription_rootplaylist_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_order_by>>
  where?: InputMaybe<playlist_bool_exp>
}

export type subscription_rootplaylist_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootplaylist_itemArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

export type subscription_rootplaylist_item_aggregateArgs = {
  distinct_on?: InputMaybe<Array<playlist_item_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<playlist_item_order_by>>
  where?: InputMaybe<playlist_item_bool_exp>
}

export type subscription_rootplaylist_item_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_rootreviewArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

export type subscription_rootreview_aggregateArgs = {
  distinct_on?: InputMaybe<Array<review_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<review_order_by>>
  where?: InputMaybe<review_bool_exp>
}

export type subscription_rootreview_by_pkArgs = {
  id: Scalars['bigint']
}

export type subscription_roottagArgs = {
  distinct_on?: InputMaybe<Array<tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<tag_order_by>>
  where?: InputMaybe<tag_bool_exp>
}

export type subscription_roottag_aggregateArgs = {
  distinct_on?: InputMaybe<Array<tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<tag_order_by>>
  where?: InputMaybe<tag_bool_exp>
}

export type subscription_roottag_by_pkArgs = {
  id: Scalars['bigint']
}

/** columns and relationships of "tag" */
export type tag = {
  __typename: 'tag'
  /** An array relationship */
  audio_book_tags: Array<audio_book_tag>
  /** An aggregate relationship */
  audio_book_tags_aggregate: audio_book_tag_aggregate
  created_at: Scalars['timestamptz']
  id: Scalars['bigint']
  language: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
}

/** columns and relationships of "tag" */
export type tagaudio_book_tagsArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

/** columns and relationships of "tag" */
export type tagaudio_book_tags_aggregateArgs = {
  distinct_on?: InputMaybe<Array<audio_book_tag_select_column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<audio_book_tag_order_by>>
  where?: InputMaybe<audio_book_tag_bool_exp>
}

/** aggregated selection of "tag" */
export type tag_aggregate = {
  __typename: 'tag_aggregate'
  aggregate: Maybe<tag_aggregate_fields>
  nodes: Array<tag>
}

/** aggregate fields of "tag" */
export type tag_aggregate_fields = {
  __typename: 'tag_aggregate_fields'
  avg: Maybe<tag_avg_fields>
  count: Scalars['Int']
  max: Maybe<tag_max_fields>
  min: Maybe<tag_min_fields>
  stddev: Maybe<tag_stddev_fields>
  stddev_pop: Maybe<tag_stddev_pop_fields>
  stddev_samp: Maybe<tag_stddev_samp_fields>
  sum: Maybe<tag_sum_fields>
  var_pop: Maybe<tag_var_pop_fields>
  var_samp: Maybe<tag_var_samp_fields>
  variance: Maybe<tag_variance_fields>
}

/** aggregate fields of "tag" */
export type tag_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<tag_select_column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type tag_avg_fields = {
  __typename: 'tag_avg_fields'
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type tag_bool_exp = {
  _and?: InputMaybe<Array<tag_bool_exp>>
  _not?: InputMaybe<tag_bool_exp>
  _or?: InputMaybe<Array<tag_bool_exp>>
  audio_book_tags?: InputMaybe<audio_book_tag_bool_exp>
  created_at?: InputMaybe<timestamptz_comparison_exp>
  id?: InputMaybe<bigint_comparison_exp>
  language?: InputMaybe<String_comparison_exp>
  name?: InputMaybe<String_comparison_exp>
  type?: InputMaybe<String_comparison_exp>
}

/** unique or primary key constraints on table "tag" */
export enum tag_constraint {
  /** unique or primary key constraint */
  tag_name_type_language_key = 'tag_name_type_language_key',
  /** unique or primary key constraint */
  tag_pkey = 'tag_pkey',
}

/** input type for incrementing numeric columns in table "tag" */
export type tag_inc_input = {
  id?: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "tag" */
export type tag_insert_input = {
  audio_book_tags?: InputMaybe<audio_book_tag_arr_rel_insert_input>
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type tag_max_fields = {
  __typename: 'tag_max_fields'
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type tag_min_fields = {
  __typename: 'tag_min_fields'
  created_at: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['bigint']>
  language: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

/** response of any mutation on the table "tag" */
export type tag_mutation_response = {
  __typename: 'tag_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<tag>
}

/** input type for inserting object relation for remote table "tag" */
export type tag_obj_rel_insert_input = {
  data: tag_insert_input
  /** on conflict condition */
  on_conflict?: InputMaybe<tag_on_conflict>
}

/** on conflict condition type for table "tag" */
export type tag_on_conflict = {
  constraint: tag_constraint
  update_columns?: Array<tag_update_column>
  where?: InputMaybe<tag_bool_exp>
}

/** Ordering options when selecting data from "tag". */
export type tag_order_by = {
  audio_book_tags_aggregate?: InputMaybe<audio_book_tag_aggregate_order_by>
  created_at?: InputMaybe<order_by>
  id?: InputMaybe<order_by>
  language?: InputMaybe<order_by>
  name?: InputMaybe<order_by>
  type?: InputMaybe<order_by>
}

/** primary key columns input for table: tag */
export type tag_pk_columns_input = {
  id: Scalars['bigint']
}

/** select columns of table "tag" */
export enum tag_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  name = 'name',
  /** column name */
  type = 'type',
}

/** input type for updating data in table "tag" */
export type tag_set_input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['bigint']>
  language?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type tag_stddev_fields = {
  __typename: 'tag_stddev_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type tag_stddev_pop_fields = {
  __typename: 'tag_stddev_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type tag_stddev_samp_fields = {
  __typename: 'tag_stddev_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type tag_sum_fields = {
  __typename: 'tag_sum_fields'
  id: Maybe<Scalars['bigint']>
}

/** update columns of table "tag" */
export enum tag_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  language = 'language',
  /** column name */
  name = 'name',
  /** column name */
  type = 'type',
}

/** aggregate var_pop on columns */
export type tag_var_pop_fields = {
  __typename: 'tag_var_pop_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type tag_var_samp_fields = {
  __typename: 'tag_var_samp_fields'
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type tag_variance_fields = {
  __typename: 'tag_variance_fields'
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type uuid_comparison_exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type makeCommentVariables = Exact<{
  artworkId: Scalars['bigint']
  content: Scalars['String']
  memberId: Scalars['Int']
}>

export type makeComment = {
  insert_artwork_comment: {
    __typename: 'artwork_comment_mutation_response'
    returning: Array<{
      __typename: 'artwork_comment'
      artwork_id: any
      content: string
      id: number
      member_id: number
      created_at: any
    }>
  } | null
}

export type queryMembersVariables = Exact<{
  _in?: InputMaybe<Array<Scalars['bigint']> | Scalars['bigint']>
}>

export type queryMembers = { member: Array<{ __typename: 'member'; id: any; username: string }> }

export type queryCommentsVariables = Exact<{
  _eq: Scalars['bigint']
}>

export type queryComments = {
  artwork_comment: Array<{
    __typename: 'artwork_comment'
    content: string
    id: number
    member_id: number
    created_at: any
  }>
}

export type getMemberVariables = Exact<{
  memberId: Scalars['bigint']
}>

export type getMember = { member_by_pk: { __typename: 'member'; id: any; username: string; email: string } | null }

export type GET_ARTWORKVariables = Exact<{
  artworkId: Scalars['bigint']
  memberId: Scalars['bigint']
}>

export type GET_ARTWORK = {
  artwork_by_pk: {
    __typename: 'artwork'
    id: any
    featured_image: string | null
    images: any | null
    description: string | null
    material: string | null
    name: string
    size: string | null
    speech: string | null
    years: number | null
    creator: { __typename: 'creator'; id: any; name: string } | null
    exhibition_artworks: Array<{ __typename: 'exhibition_artwork'; exhibition_id: any }>
    member_artwork_collections_aggregate: {
      __typename: 'member_artwork_collection_aggregate'
      aggregate: { __typename: 'member_artwork_collection_aggregate_fields'; count: number } | null
    }
    comments: Array<{
      __typename: 'artwork_comment'
      id: number
      content: string
      member: { __typename: 'member'; id: any; name: string | null; avatar_url: string | null }
    }>
  } | null
}

export type GET_ARTWORKSVariables = Exact<{
  memberId: Scalars['bigint']
}>

export type GET_ARTWORKS = {
  artwork: Array<{
    __typename: 'artwork'
    id: any
    featured_image: string | null
    images: any | null
    description: string | null
    material: string | null
    name: string
    size: string | null
    speech: string | null
    years: number | null
    creator: { __typename: 'creator'; id: any; name: string } | null
    exhibition_artworks: Array<{ __typename: 'exhibition_artwork'; exhibition_id: any }>
    member_artwork_collections_aggregate: {
      __typename: 'member_artwork_collection_aggregate'
      aggregate: { __typename: 'member_artwork_collection_aggregate_fields'; count: number } | null
    }
  }>
}

export type GET_AUDIO_BOOKSVariables = Exact<{
  condition: audio_book_bool_exp
}>

export type GET_AUDIO_BOOKS = {
  audio_book: Array<{
    __typename: 'audio_book'
    id: any
    title: string
    featured_image_url: string | null
    description: string | null
    duration: any | null
    creator_name: string | null
    language: string | null
    created_at: any
    updated_at: any
  }>
}

export type GET_AUDIO_BOOKVariables = Exact<{
  audioBookId: Scalars['bigint']
}>

export type GET_AUDIO_BOOK = {
  audio_book_by_pk: {
    __typename: 'audio_book'
    id: any
    title: string
    featured_image_url: string | null
    description: string | null
    content: string | null
    duration: any | null
    audio_url: string | null
    track_url: string | null
    creator_name: string | null
    language: string | null
    created_at: any
    updated_at: any
  } | null
}

export type GET_AUDIO_BOOKS_WITH_CATEGORIESVariables = Exact<{
  categoryCondition?: InputMaybe<category_bool_exp>
  condition: audio_book_category_bool_exp
  limit?: InputMaybe<Scalars['Int']>
}>

export type GET_AUDIO_BOOKS_WITH_CATEGORIES = {
  category: Array<{
    __typename: 'category'
    id: any
    name: string
    description: string | null
    language: string
    audio_book_categories: Array<{
      __typename: 'audio_book_category'
      audio_book: {
        __typename: 'audio_book'
        id: any
        title: string
        featured_image_url: string | null
        description: string | null
        duration: any | null
        creator_name: string | null
        language: string | null
        created_at: any
        updated_at: any
      }
    }>
  }>
}

export type GET_AUDIO_BOOKS_WITH_CATEGORYVariables = Exact<{
  categoryId: Scalars['bigint']
}>

export type GET_AUDIO_BOOKS_WITH_CATEGORY = {
  category_by_pk: {
    __typename: 'category'
    id: any
    name: string
    description: string | null
    language: string
    audio_book_categories: Array<{
      __typename: 'audio_book_category'
      audio_book: {
        __typename: 'audio_book'
        id: any
        title: string
        featured_image_url: string | null
        description: string | null
        duration: any | null
        creator_name: string | null
        language: string | null
        created_at: any
        updated_at: any
      }
    }>
  } | null
}

export type GET_AUDIO_BOOK_DETAILS_WITH_CATEGORYVariables = Exact<{
  categoryId: Scalars['bigint']
}>

export type GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY = {
  category_by_pk: {
    __typename: 'category'
    id: any
    name: string
    description: string | null
    language: string
    audio_book_categories: Array<{
      __typename: 'audio_book_category'
      audio_book: {
        __typename: 'audio_book'
        id: any
        title: string
        featured_image_url: string | null
        description: string | null
        content: string | null
        duration: any | null
        audio_url: string | null
        track_url: string | null
        creator_name: string | null
        language: string | null
        created_at: any
        updated_at: any
      }
    }>
  } | null
}

export type ADD_MEMBER_ARTWORK_COLLECTIONVariables = Exact<{
  artworkId: Scalars['bigint']
}>

export type ADD_MEMBER_ARTWORK_COLLECTION = {
  insert_member_artwork_collection_one: { __typename: 'member_artwork_collection'; id: any } | null
}

export type DELETE_MEMBER_ARTWORK_COLLECTIONVariables = Exact<{
  artworkId: Scalars['bigint']
}>

export type DELETE_MEMBER_ARTWORK_COLLECTION = {
  delete_member_artwork_collection: {
    __typename: 'member_artwork_collection_mutation_response'
    affected_rows: number
  } | null
}

export type GET_COLLECTIONS_BY_MEMBERVariables = Exact<{
  memberId: Scalars['bigint']
}>

export type GET_COLLECTIONS_BY_MEMBER = {
  member_artwork_collection: Array<{
    __typename: 'member_artwork_collection'
    id: any
    artwork: {
      __typename: 'artwork'
      id: any
      featured_image: string | null
      images: any | null
      description: string | null
      material: string | null
      name: string
      size: string | null
      speech: string | null
      years: number | null
      creator: { __typename: 'creator'; id: any; name: string } | null
      exhibition_artworks: Array<{ __typename: 'exhibition_artwork'; exhibition_id: any }>
      member_artwork_collections_aggregate: {
        __typename: 'member_artwork_collection_aggregate'
        aggregate: { __typename: 'member_artwork_collection_aggregate_fields'; count: number } | null
      }
    }
  }>
}

export type GET_EXHIBITIONVariables = Exact<{
  condition: exhibition_bool_exp
  memberId: Scalars['bigint']
}>

export type GET_EXHIBITION = {
  exhibition: Array<{
    __typename: 'exhibition'
    id: any
    name: string
    featured_image: string | null
    exhibition_artworks: Array<{
      __typename: 'exhibition_artwork'
      artwork: {
        __typename: 'artwork'
        id: any
        featured_image: string | null
        images: any | null
        description: string | null
        material: string | null
        name: string
        size: string | null
        speech: string | null
        years: number | null
        creator: { __typename: 'creator'; id: any; name: string } | null
        exhibition_artworks: Array<{ __typename: 'exhibition_artwork'; exhibition_id: any }>
        member_artwork_collections_aggregate: {
          __typename: 'member_artwork_collection_aggregate'
          aggregate: { __typename: 'member_artwork_collection_aggregate_fields'; count: number } | null
        }
      }
    }>
  }>
}

export type GET_EXHIBITIONSVariables = Exact<{ [key: string]: never }>

export type GET_EXHIBITIONS = {
  exhibition: Array<{
    __typename: 'exhibition'
    id: any
    name: string
    featured_image: string | null
    exhibition_artworks_aggregate: {
      __typename: 'exhibition_artwork_aggregate'
      aggregate: { __typename: 'exhibition_artwork_aggregate_fields'; count: number } | null
    }
  }>
}

export type GET_TAGSVariables = Exact<{
  condition: tag_bool_exp
}>

export type GET_TAGS = { tag: Array<{ __typename: 'tag'; id: any; name: string }> }

export type REGISTER_MEMBERVariables = Exact<{
  role: Scalars['String']
  passwordHash?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  name: Scalars['String']
}>

export type REGISTER_MEMBER = {
  insert_member: {
    __typename: 'member_mutation_response'
    returning: Array<{
      __typename: 'member'
      id: any
      email: string
      username: string
      name: string | null
      role: string | null
      avatar_url: string | null
      refresh_token: string | null
      password_hash: string | null
    }>
  } | null
}

export type ADD_MEMBERVariables = Exact<{
  role: Scalars['String']
  password?: InputMaybe<Scalars['String']>
  passwordHash: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}>

export type ADD_MEMBER = {
  insert_member: {
    __typename: 'member_mutation_response'
    returning: Array<{
      __typename: 'member'
      id: any
      email: string
      username: string
      name: string | null
      role: string | null
      avatar_url: string | null
      password: string | null
    }>
  } | null
}

export type UPDATE_MEMBERVariables = Exact<{
  memberId: Scalars['bigint']
  updated?: InputMaybe<member_set_input>
}>

export type UPDATE_MEMBER = { update_member: { __typename: 'member_mutation_response'; affected_rows: number } | null }

export type UPDATE_LOGIN_ATVariables = Exact<{
  memberId: Scalars['bigint']
  loginAt?: InputMaybe<Scalars['timestamptz']>
}>

export type UPDATE_LOGIN_AT = {
  update_member: { __typename: 'member_mutation_response'; affected_rows: number } | null
}

export type GET_MEMBERVariables = Exact<{
  memberId: Scalars['bigint']
}>

export type GET_MEMBER = {
  member_by_pk: {
    __typename: 'member'
    id: any
    email: string
    username: string
    name: string | null
    password_hash: string | null
    role: string | null
    avatar_url: string | null
    refresh_token: string | null
  } | null
}

export type GET_MEMBER_LISTVariables = Exact<{ [key: string]: never }>

export type GET_MEMBER_LIST = {
  member: Array<{
    __typename: 'member'
    id: any
    email: string
    username: string
    name: string | null
    password_hash: string | null
    avatar_url: string | null
    role: string | null
  }>
}

export type GET_MEMBER_BY_REFRESH_TOKENVariables = Exact<{
  refreshToken: Scalars['String']
}>

export type GET_MEMBER_BY_REFRESH_TOKEN = {
  member: Array<{
    __typename: 'member'
    id: any
    name: string | null
    email: string
    username: string
    role: string | null
    avatar_url: string | null
  }>
}

export type GET_POSSIBLE_MEMBERSVariables = Exact<{
  email?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}>

export type GET_POSSIBLE_MEMBERS = {
  member: Array<{
    __typename: 'member'
    id: any
    email: string
    username: string
    name: string | null
    avatar_url: string | null
    password_hash: string | null
    refresh_token: string | null
    role: string | null
  }>
}
